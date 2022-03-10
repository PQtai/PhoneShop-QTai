import style from './InfoProductPage.module.scss'
import Datas from '../../Datas'


import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import { Grid, Container } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const InfoProductPage = ({
  idInfoProduct,
  setIdInfoProduct,
  scrollToTop,
  setOverlay,
  setDisplayFormConfirm
}) => {


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
        <h3>Điện thoại {infoProduct.name} {infoProduct.memory} </h3>
        <Grid className={clsx(style.bodyGrid)} container spacing={2} justify="center" >
          <Grid item xs={12} md={7} sm={12} >
            <div className={clsx(style.img)} >
              <div className={clsx(style.imgInfoProduct)}
                style={{ backgroundImage: "url(" + infoProduct.image + ")" }}
              ></div>
              <NavigateBeforeIcon className={clsx(style.navigateIcon)} />
              <NavigateNextIcon className={clsx(style.navigateIcon)} />
            </div>
            <h3>Xem tất cả điểm nổi bật</h3>
            <div className={clsx(style.outstanding)} >
              <ul className={clsx(style.listOutstanding)}>
                <li className={clsx(style.itemOutstanding)} >Màu sắc
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
                <li className={clsx(style.itemOutstanding)} >Hình mở hộp</li>
                <li className={clsx(style.itemOutstanding)} >Hình 360 độ</li>
                <li className={clsx(style.itemOutstanding)} >Thông số kỹ thuật</li>
                <li className={clsx(style.itemOutstanding)} >Thông tin sản phẩm</li>
              </ul>
              <button 
              onClick={() => {
                setOverlay(true);
                setDisplayFormConfirm(true)
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
              {/* Lấy data lặp qua rồi render */}
              <span>Màu ...</span>
              <span>Màu ...</span>
              <span
                style={{
                  border: "1px solid #e43d39",
                  color: "#e43d39"
                }}
              >{infoProduct.color}</span>
              <span>Màu ...</span>
            </div>
            <div className={clsx(style.configuration)}>
              <p>Cấu hình Điện thoại {infoProduct.name + " " + infoProduct.ram + " " + infoProduct.memory}</p>
              <ul>
                <li>
                  <span>Màn hình</span>
                  <span>Dynamic AMOLED 2X6.8"Quad HD+ (2K+)</span>
                </li>
                <li>
                  <span>Hệ điều hành:</span>
                  <span>Android 12</span>
                </li>
                <li>
                  <span>Camera sau:</span>
                  <span>Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP</span>
                </li>
                <li>
                  <span>Camera trước:</span>
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
                  <span>Bộ nhớ trong:</span>
                  <span>{infoProduct.memory}</span>
                </li>
                <li>
                  <span>SIM:</span>
                  <span>2 Nano SIM hoặc 1 Nano SIM + 1 eSIMHỗ trợ 5G</span>
                </li>
                <li>
                  <span>Pin, Sạc:</span>
                  <span>5000mAh 45W</span>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <h2>Các sản phẩm liên quan</h2>
        <div className={clsx(style.similarProduct)} >
          {similarProduct.map((product, index) => {
            return (
              <div
                ref={elementsimilarProduct.current[index]}
                key={index}
                className={style.itemSimilarProduct}
                onClick={() => {
                  setIdInfoProduct(product.id);
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
    </div>
  )
}

export default InfoProductPage
