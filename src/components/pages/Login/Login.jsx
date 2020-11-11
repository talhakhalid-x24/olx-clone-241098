import React from 'react';
import './login.css';
import Modal from 'react-modal';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

 
const Login = () => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div className="">
        <a onClick={openModal} className="login">Login</a>
        <Modal
            className="p-4 modal-main"
            isOpen={modalIsOpen}
        >
            <div className="close-btn">
                <button onClick={closeModal}>X</button>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp" className="d-block" alt="..." />
                        <p className="login-text">Helpmake OLX safer place to buy and sell</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp" className="d-block" alt="..." />
                        <p className="login-text">Contact and close deals faster</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp" className="d-block" alt="..." />
                        <p className="login-text">Save all your favourite items in one place</p>
                    </div>
                </div>
                <ol className="carousel-indicators mx-0">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span aria-hidden="true">
                        <ArrowBackIosIcon />
                    </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span aria-hidden="true">
                        <ArrowForwardIosIcon />
                    </span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>Continue with phone</Button>
                <Button> <i class="fa fa-facebook-f mr-2"></i> Continue with facebook</Button>
                <Button> <i class="fa fa-google mr-2"></i> Continue with google</Button>
                <Button>Continue with email</Button>
            </ButtonGroup>
            <p className="text-center">We won't share your personal details with anyone</p>
        </Modal>
      </div>
    );
}

export default Login;