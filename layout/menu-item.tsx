import { MouseEvent, useState, KeyboardEvent, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { useStyles } from './menu-styles';

export interface LurMenuItems {
  link: string;
  label: string;
}

export interface LurMenuItemModel {
  id: string;
  label: string;
  items: LurMenuItems[];
}

export const LurMenuItem = (props: { menuItem: LurMenuItemModel }) => {
  const { id, label, items } = props.menuItem;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (
    event: MouseEvent<Document> | MouseEvent<HTMLElement>
  ) => {
    if (
      anchorRef &&
      anchorRef.current &&
      (anchorRef.current as HTMLElement).contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      (anchorRef.current as HTMLElement).focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef as any}
          aria-controls={open ? id : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          className={classes.button}
        >
          {label}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id={id}
                    onKeyDown={handleListKeyDown}
                  >
                    {items.map((item: any) => (
                      <MenuItem key={item.label} onClick={handleClose}>
                        <Link href={item.link}>
                          <a>{item.label}</a>
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
