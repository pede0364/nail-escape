import Button from "@mui/material/Button";

{
  /* home page */
}
// import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/layout/Page';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
// const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <>
        <h1>Welcome!</h1>
        <p>The Nail Escape is the premier nail salon in Burnsville, MN.  My goal is to provide you with top-notch nail services, while promoting the importance of natural and healthy nails.  I specialize in manicures, pedicures, nail extensions, and nail art.  I am dedicated to giving you a luxurious and relaxing experience while ensuring the health and maintenance of your natural nails.</p>
        <p>I understand that every client is unique, which is why I offer a wide range of services to cater to all your nail care needs.  Whether you want a classic French manicure, or want to try out the latest gel nail extension trend, I can make it happen.  I also offer regular manicure and pedicure services for those who prefer simple, yet elegant looks.</p>
        <p>At The Nail Escape, I prioritize the use of high-quality products that are safe for both you and your nails.  I also take pride in usuing natural and organic ingredients in my treatments whenever possible.  My attention to detail and commitment to providing exceptional services have earned me a loyal clientele who trust me for all their nail care needs.  Book an appointment with The Nail Escape today!</p>

        <Button variant="contained">Book Now</Button>
      </>
    </Page>
  );
});

export default Home;
