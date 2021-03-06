import style from './InfoProductPage.module.scss'
import Datas from '../../Datas'
import FormConfirm from '../../Component/FormConfirm/FormConfirm'

import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import { Grid, Container } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {useNavigate} from 'react-router-dom';

const InfoProductPage = ({
  idInfoProduct,
  setIdInfoProduct,
  scrollToTop,
  setOverlay,
  setDisplayFormConfirm,
  elementFormConfirm,
  displayFormConfirm,
  checkLogin,
  setOpenNotification,
  setNotificationMessage,
  setMessage,
}) => {
  const navigate = useNavigate();
  const position = useRef(0)
  const [infoProduct, setInfoProduct] = useState(Datas.find((data, index) => {
    return data.id === idInfoProduct;
  }))
  const [similarProduct, setSimilarProduct] = useState(Datas.filter((data, index) => {
    return data.theloai === infoProduct.theloai;
  }))
  const elementsimilarProduct = useRef(similarProduct.map(() => React.createRef()));

  const handleSlideLeft = () => {
    position.current -= position.current === 0 ? 0 : elementsimilarProduct.current[0].current.offsetWidth;
    elementsimilarProduct.current.forEach(element => {
      element.current.style.transform = "translateX(-"+position.current+"px)";
    });
  }
  const handleSlideRight = () => {
    position.current += elementsimilarProduct.current[0].current.offsetWidth;
    elementsimilarProduct.current.forEach(element => {
      element.current.style.transform = "translateX(-"+position.current+"px)";
    });
  }
  useEffect(() => {
    setInfoProduct(Datas.find((data, index) => {
      return data.id === idInfoProduct;
    }))
    setSimilarProduct(Datas.filter((data, index) => {
      return data.theloai === infoProduct.theloai;
    }));
  }, [idInfoProduct, infoProduct])
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className={clsx(style.body)} >
      <Container fixed >
        <h3>??i???n tho???i {infoProduct.name} {infoProduct.memory} </h3>
        <Grid className={clsx(style.bodyGrid)} container spacing={2} justify="center" >
          <Grid item xs={12} md={7} sm={12} >
            <div className={clsx(style.img)} >
              <div className={clsx(style.imgInfoProduct)}
                style={{ backgroundImage: "url(" + infoProduct.image + ")" }}
              ></div>
              <NavigateBeforeIcon className={clsx(style.navigateIcon)} />
              <NavigateNextIcon className={clsx(style.navigateIcon)} />
            </div>
            <h3>Xem t???t c??? ??i???m n???i b???t</h3>
            <div className={clsx(style.outstanding)} >
              <ul className={clsx(style.listOutstanding)}>
                <li className={clsx(style.itemOutstanding)} >M??u s???c
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li className={clsx(style.itemOutstanding)} >H??nh m??? h???p</li>
                <li className={clsx(style.itemOutstanding)} >H??nh 360 ?????</li>
                <li className={clsx(style.itemOutstanding)} >Th??ng s??? k??? thu???t</li>
                <li className={clsx(style.itemOutstanding)} >Th??ng tin s???n ph???m</li>
              </ul>
              <button 
              onClick={() => {
                if(!checkLogin){
                  setOpenNotification(true);
                  setNotificationMessage("info");
                  setMessage("B???n c???n ????ng nh???p ????? th???c hi???n ch???c n??ng!")
                }else{
                  setOverlay(true);
                  setDisplayFormConfirm(true)
                }
              }}
              className={clsx(style.btnCheckout)}
              >Mua ngay</button>
            </div>
          </Grid>
          <Grid item xs={12} md={5} sm={12} >
            <div className={clsx(style.Capacity)} >
              <span
                style={{
                  border: "1px solid #e43d39",
                  color: "#e43d39"
                }}
              >{infoProduct.ram + "/" + infoProduct.memory}</span>
              <span>12/256gb</span>
              <span>12/512gb</span>
            </div>
            <div className={clsx(style.colorPhone)} >
              {/* L???y data l???p qua r???i render */}
              <span>M??u ...</span>
              <span>M??u ...</span>
              <span
                style={{
                  border: "1px solid #e43d39",
                  color: "#e43d39"
                }}
              >{infoProduct.color}</span>
              <span>M??u ...</span>
            </div>
            <div className={clsx(style.configuration)}>
              <p>C???u h??nh ??i???n tho???i {infoProduct.name + " " + infoProduct.ram + " " + infoProduct.memory}</p>
              <ul>
                <li>
                  <span>M??n h??nh</span>
                  <span>Dynamic AMOLED 2X6.8"Quad HD+ (2K+)</span>
                </li>
                <li>
                  <span>H??? ??i???u h??nh:</span>
                  <span>Android 12</span>
                </li>
                <li>
                  <span>Camera sau:</span>
                  <span>Ch??nh 108 MP & Ph??? 12 MP, 10 MP, 10 MP</span>
                </li>
                <li>
                  <span>Camera tr?????c:</span>
                  <span>40 MP</span>
                </li>
                <li>
                  <span>Chip:</span>
                  <span>{infoProduct.chip}</span>
                </li>
                <li>
                  <span>RAM:</span>
                  <span>{infoProduct.ram}</span>
                </li>
                <li>
                  <span>B??? nh??? trong:</span>
                  <span>{infoProduct.memory}</span>
                </li>
                <li>
                  <span>SIM:</span>
                  <span>2 Nano SIM ho???c 1 Nano SIM + 1 eSIMH??? tr??? 5G</span>
                </li>
                <li>
                  <span>Pin, S???c:</span>
                  <span>5000mAh 45W</span>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <h2>C??c s???n ph???m li??n quan</h2>
        <div className={clsx(style.similarProduct)} >
          {similarProduct.map((product, index) => {
            return (
              <div
                ref={elementsimilarProduct.current[index]}
                key={index}
                className={style.itemSimilarProduct}
                onClick={() => {
                  setIdInfoProduct(product.id)
                  navigate('/PhoneShop-QTai/ShopAllPage/' + product.id)
                  scrollToTop();
                }}>
                <div
                  style={{
                    backgroundImage: "url(" + product.image + ")"
                  }} className={style.itemImg}></div>
                <div className={style.nameItem} >{product.name}</div>
              </div>
            )
          })}
          <NavigateBeforeIcon
            className={clsx(style.navigateIcon, style.iconNext)}
            onClick={() => {
              handleSlideLeft();
            }}
          />
          <NavigateNextIcon 
          className={clsx(style.navigateIcon, style.iconPrev)} 
          onClick={() => {
            handleSlideRight();
          }}
          />
        </div>
      </Container>
      <FormConfirm
            elementFormConfirm={elementFormConfirm}
            displayFormConfirm={displayFormConfirm}
            infoProduct= {infoProduct}
            setOverlay= {setOverlay}
            setDisplayFormConfirm= {setDisplayFormConfirm}
      />
    </div>
  )
}

export default InfoProductPage
