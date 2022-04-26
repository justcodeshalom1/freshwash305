import logo from '../FullLogo_Transparent.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About Fresh Wash 305</span> Fresh Wash 305 is a mobile, car and boat washing and wax service. Our services also include full detailing, paint corrction and our #1 rated ceramic coating package. We provide what no other detail companies in the South Florida can. We come to you whenever and wherever you are and provide the very best V.I.P service possible.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/FRESHWASH305"><FacebookIcon/></a>
          <a href="https://www.instagram.com/freshwash305/"><InstagramIcon/></a>
          <a href="https://www.google.com/search?q=fresh+wash+305&source=hp&ei=GubkYeb7IeurqtsP6cWxuAg&iflsig=ALs-wAMAAAAAYeT0Ki_pkf0uptfv6SEgs5amJ-5Od2Ng&ved=0ahUKEwjm8OrA77f1AhXrlWoFHeliDIcQ4dUDCAk&uact=5&oq=fresh+wash+305&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEOg4IABCPARDqAhCMAxDlAjoOCC4QjwEQ6gIQjAMQ5QI6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQsQMQgwE6CAguELEDEIMBOgsILhCABBDHARCjAjoICAAQsQMQgwE6CAguEIAEELEDOgsILhCxAxDHARCjAjoLCAAQgAQQsQMQyQM6BQgAEJIDOggIABCABBDJAzoFCAAQsQM6EQguEIAEELEDEIMBEMcBEKMCOg4ILhCxAxCDARDHARDRAzoLCC4QgAQQxwEQrwE6BwgAEIAEEAo6CggAEIAEELEDEAo6BwguEIAEEAo6BggAEBYQHlDNBljZXWCTY2gDcAB4AIABYIgBqAqSAQIxNpgBAKABAbABCg&sclient=gws-wiz"><GoogleIcon/></a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>(305) 504-2051</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>freshwah305@gmail.com</p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2><img src={logo} alt='logo' height="105px"/></h2>
        <p className="menu">
          <a href="/"> Home</a> |
          <a href="/about"> About</a> |
        </p>
        <p className="name">Fresh Wash 305 &copy; 2022</p>
      </div>
    </footer>
</>)}

export default footer