import React , {useRef , useEffect} from 'react'
import clsx from 'clsx'
import {Grid} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


import style from './Main.module.scss'



const Main = ({
    PhonePopular , 
    productCarts , 
    setProductCarts , 
    setPriceProduct,
    priceProduct,
    setOpenNotification,
    setNotificationMessage,
    setMessage,
    setIdInfoProduct
}) => {
const elementPopular = useRef(PhonePopular.map(()=> React.createRef()));
const position = useRef(0);
const paretPopular = useRef();
const childPopular = useRef();
const widthItemPopular = useRef();
const navigate = useNavigate();
const po = useRef();
const co = useRef();
const cw = useRef();
const pr = useRef();
const cr = useRef();
useEffect(() => {
    elementPopular.current[0].current.focus();
    widthItemPopular.current = elementPopular.current[0].current.offsetWidth;
},[PhonePopular]);
const functionHandlePopular = () => {
    po.current = paretPopular.current.getBoundingClientRect();
    co.current = childPopular.current.getBoundingClientRect();
    cw.current = widthItemPopular.current * PhonePopular.length;
    pr.current = parseInt(po.current.right  , 10);
    cr.current = parseInt(co.current.right + cw.current - pr.current, 10);
} 
  return (
    <div className={clsx(style.Main)} >
      <div className={clsx(style.MainTechnology)}>
          <Grid container justify="center" spacing={2}>
              <Grid item md={4} >
                <div className={clsx(style.itemTechnology)} >
                    <img src="data:image/jpeg;base64,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" className={clsx(style.img)} alt={"Ảnh chip set"} ></img>
                    <ul className={clsx(style.techList)} >
                        <li>Công nghệ Chipset hàng đầu</li>
                        <li>Tiến trình 5nm+(N5P)</li>
                        <span className={clsx(style.itemLink)} >Tìm hiểu ngay</span>
                    </ul>
                </div>
              </Grid>
              <Grid item md={4} >
                <div className={clsx(style.itemTechnology)} >
                    <img src="https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-chong-nuoc-1.png" className={clsx(style.img)} alt={"Ảnh điện thoại"} ></img>
                    <ul className={clsx(style.techList)} >
                        <li>Đạt chuẩn kháng nước IP 68</li>
                        <span className={clsx(style.itemLink)} >Tìm hiểu ngay</span>
                    </ul>
                </div>
              </Grid>
              <Grid item md={4} >
                <div className={clsx(style.itemTechnology)} >
                    <img src="https://photo2.tinhte.vn/data/attachment-files/2021/10/5692173_cover_Tong_hop_thong_tin_google_pixel_6_6pro_cmarea.jpg" className={clsx(style.img)} alt={"Ảnh Camera"} ></img>
                    <ul className={clsx(style.techList)} >
                        <li>Công nghệ AI với chip Tensor, giữ vững ngôi vương về camera!</li>
                        <span className={clsx(style.itemLink)} >Tìm hiểu ngay</span>
                    </ul>
                </div>
              </Grid>
          </Grid>
      </div>
      <div className={clsx(style.popular)}>
        <div className={clsx(style.popularTitle)}>
            <p>Các mẫu thịnh hành hiện nay</p>
            <div className={clsx(style.popularBtn)} >
                <button className={clsx(style.btn,style.btnPrev)} onClick={(e) => {
                    functionHandlePopular();
                    position.current -= widthItemPopular.current;
                    if(position.current < 0) {
                        position.current = 0;
                    }
                    childPopular.current.style.transform = `translateX(-${position.current}px)`;
                }}>
                    <NavigateBeforeIcon className={clsx(style.navigateIcon)} />
                    <ArrowBackIcon className={clsx(style.arrowIcon)} />
                </button>
                <button className={clsx(style.btn,style.btnNext)} onClick={(e) => {
                    functionHandlePopular();
                    if(cr.current <= pr.current || cr.current <= 0) {
                        position.current = cw.current - pr.current;
                    }else{
                        position.current += widthItemPopular.current;
                        if(position.current > cw.current - pr.current){
                            position.current = cw.current - pr.current;
                        }
                    }
                        childPopular.current.style.transform = `translateX(-${position.current}px)`;
                }} >
                    <NavigateNextIcon className={clsx(style.navigateIcon)} />
                    <ArrowForwardIcon className={clsx(style.arrowIcon)} />
                </button>
            </div>
        </div>
        <div className={clsx(style.elementPopular)} ref={paretPopular} >
            <div className={clsx(style.gridContainer)} ref={childPopular} >
                {PhonePopular.map((phone, index) => {
                    return (
                    <div 
                    onClick={(e) => {
                        setIdInfoProduct(phone.id)
                        navigate('/PhoneShop-QTai/ShopAllPage/' + phone.id)
                    }}
                    className={clsx(style.gridPopular)} 
                    key={index}  
                    ref={elementPopular.current[index]}>
                        <div className={clsx(style.itemPopular)}>
                            <img className={clsx(style.imagePhone)}  src={phone.image} alt="phone popular"/>
                        </div>
                        <div className={clsx(style.popularDecription)}>
                            <div className={clsx(style.infoPhone)}>
                                <p className={clsx(style.name)} >Tên: {phone.name}</p>
                                <span className={clsx(style.purchase)} >Lượt mua: {phone.soid}</span>
                                <span className={clsx(style.purchase)} >Màu : {phone.color}</span>
                            </div>
                            <div className={clsx(style.buy)}>
                                <span className={clsx(style.price)} >Giá: {phone.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ</span>
                                <button 
                                className={clsx(style.btnAddCart)} 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if(localStorage.customerName){
                                        setOpenNotification(true);
                                        setNotificationMessage("success");
                                        setMessage("Thêm thành công!")
                                        e.target.style.cursor = 'not-allowed';
                                        setTimeout(() => {
                                            setProductCarts(productCarts.concat([phone]));
                                            setPriceProduct( priceProduct + phone.price);
                                            e.target.style.cursor = 'pointer';
                                        },[1000])
                                    }else{
                                        setOpenNotification(true);
                                        setNotificationMessage("info");
                                        setMessage("Bạn cần đăng nhập để thực hiện chức năng!")
                                    }
                                }}
                                >Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
      </div>
      <div className={clsx(style.store)}>
          <Grid container justify="center" spacing={5}>
              <Grid item md={6} sm={12} xs={12}>
                    <div alt={"ảnh img"} className={clsx(style.imgStore)} style={{backgroundImage : `url("https://qhstaticssl.coohom.com/newt/101373/image/png/1628253523986/L1D0S104ENDIJHSSVNSGF77ILUF3P3XC888_1920x1080.png")`}} ></div>
                    <div className={clsx(style.storeTitle)}>
                        <h5>Cửa hàng Q T S</h5>
                        <span className={clsx(style.goStore)} >Tham quan</span>
                    </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} >
                    <div alt={"ảnh img"} className={clsx(style.imgStore)} style={{backgroundImage : `url("https://photo-cms-nghenhinvietnam.zadn.vn/w1024/Uploaded/2022/unvjohp/2021_11_01/hey/apple_140w_charger_teardown_szah.jpg")`}} ></div>
                    <div className={clsx(style.storeTitle)}>
                        <h5>Trung tâm bảo hành tại Q T S</h5>
                        <span className={clsx(style.goStore)} >Tham quan</span>
                    </div>
              </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Main