import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { LurMenuItem, LurMenuItemModel } from './menu-item';
import { useStyles } from './menu-styles';

const menu: { [key: string]: LurMenuItemModel } = {
  nosotros: {
    id: '',
    label: 'Nosotros',
    items: [
      { label: 'Quiénes somos', link: '/nosotros' },
      {
        label: 'Formación',
        link: '/formacion',
      },
    ],
  },
  china: {
    id: '',
    label: 'Medicina china',
    items: [
      { label: 'Medicina natural china', link: '/medicina-china' },
      {
        label: 'Acupuntura',
        link: '/acupuntura',
      },
      { label: 'Alimentacion energética', link: '/alimentacion' },
    ],
  },
  masaje: {
    id: '',
    label: 'Masaje',
    items: [
      { label: 'Masaje deportivo', link: '/masaje-deportivo' },
      {
        label: 'Masaje movilización articular',
        link: '/masaje-movilizacion-articular',
      },
      { label: 'Rodillo caliente', link: '/rodillo' },
    ],
  },
  osteopatia: {
    id: '',
    label: 'Osteopatía',
    items: [
      { label: 'Osteopatía', link: '/osteopatia' },
      {
        label: 'Terapia sacrocraneal',
        link: '/terapia-sacrocraneal',
      },
    ],
  },
};
const setMenuItem = (key: string): LurMenuItemModel => {
  return { ...menu[key], id: key } || ({} as LurMenuItemModel);
};

export const NavBar = () => {
  const classes = useStyles();
  return (
    <nav className='navbar'>
      <Button className={classes.button}>
        <Link href='/articles'>
          <a>Artículos</a>
        </Link>
      </Button>
      {Object.keys(menu).map((key: string) => (
        <LurMenuItem key={key} menuItem={setMenuItem(key)} />
      ))}
      <Button className={classes.button}>
        <Link href='/vendaje'>
          <a>Vendaje neuromuscular</a>
        </Link>
      </Button>
    </nav>
  );
};
