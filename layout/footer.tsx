import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <h3>En qué podemos ayudarte</h3>
        <form noValidate autoComplete='off'>
          <div className='fields'>
            <TextField
              style={{ height: 100, width: '100%', marginBottom: '30px' }}
              inputProps={{
                style: {
                  height: 80,
                },
              }}
              id='message'
              aria-label='message'
              multiline
              variant='outlined'
              placeholder='Ponte en contacto con nosotros...'
            />
            <div className='bottom-row'>
              <TextField
                style={{ marginRight: '20px' }}
                id='email'
                label='Email'
                variant='outlined'
                placeholder='ejemplo@email.com'
              />
              <Button variant='outlined' type='submit'>
                Enviar
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <Link href='https://www.facebook.com/pages/LUR-Centro-de-terapias/287090448058416?ref=hl'>
          <a target='_blank'>
            <FacebookIcon />
          </a>
        </Link>
        <Link href='https://twitter.com/Lur_tinin'>
          <a target='_blank'>
            <TwitterIcon />
          </a>
        </Link>
      </div>
    </footer>
  );
};
