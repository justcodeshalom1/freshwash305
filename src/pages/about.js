import Navbar from '../components/navbar'
import Footer from '../components/footer'

const about = () => {
    return (
        <>
          <Navbar/>
          <div className="container-fluid">
             <div className="row">
                <div className="col-md-6">
                    <h1 style={{ color: "#8BBEF7" }}>Who we are, as a Family</h1>
                    <h1 style={{ color: "#8BBEF7" }}>Fresh Wash 305 was founded in March 2021. We are a family owned mobile detail service. Customer service is our top priority. We maintain our business model by staying knowledgable in the car detail industry and provide the best in class products and services. Book with us today and we come to you, home office or anywhere you’d like your detail done.</h1>
                </div>
                <div className="col-md-6">
                     <img src='./freshwash305_SK81aA00a_copy-removebg-preview.png' alt='img' height="325px"/>
                </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}

export default about
