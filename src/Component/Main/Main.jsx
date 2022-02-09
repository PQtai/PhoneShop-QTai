import React , {useRef , useEffect} from 'react'
import clsx from 'clsx'
import {Grid} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



import style from './Main.module.scss'
import {
    ChipImg ,
    WaterproofImg , 
    CameraImg , 
    Store1 , 
    Store2} 
    from '../../assets/img/index'



const Main = ({
    PhonePopular , 
    productCards , 
    setProductCards , 
    setPriceProduct,
    priceProduct
}) => {
const elementPopular = useRef(PhonePopular.map(()=> React.createRef()));
const position = useRef(0);
const paretPopular = useRef();
const childPopular = useRef();
const widthItemPopular = useRef();
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
                    <img src={ChipImg} className={clsx(style.img)} alt={"Ảnh chip set"} ></img>
                    <ul className={clsx(style.techList)} >
                        <li>Công nghệ Chipset hàng đầu</li>
                        <li>Tiến trình 5nm+(N5P)</li>
                        <span className={clsx(style.itemLink)} >Tìm hiểu ngay</span>
                    </ul>
                </div>
              </Grid>
              <Grid item md={4} >
                <div className={clsx(style.itemTechnology)} >
                    <img src={WaterproofImg} className={clsx(style.img)} alt={"Ảnh chip set"} ></img>
                    <ul className={clsx(style.techList)} >
                        <li>Đạt chuẩn kháng nước IP 68</li>
                        <span className={clsx(style.itemLink)} >Tìm hiểu ngay</span>
                    </ul>
                </div>
              </Grid>
              <Grid item md={4} >
                <div className={clsx(style.itemTechnology)} >
                    <img src={CameraImg} className={clsx(style.img)} alt={"Ảnh chip set"} ></img>
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
                    <div className={clsx(style.gridPopular)} key={index}  ref={elementPopular.current[index]}>
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
                                className={clsx(style.btnAddCard)} 
                                onClick={() => {
                                    setProductCards(productCards.concat([phone]));
                                    setPriceProduct( priceProduct + phone.price)
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
                    <div alt={"ảnh img"} className={clsx(style.imgStore)} style={{backgroundImage : `url(${Store1})`}} ></div>
                    <div className={clsx(style.storeTitle)}>
                        <h5>Cửa hàng Q T S</h5>
                        <span className={clsx(style.goStore)} >Tham quan</span>
                    </div>
              </Grid>
              <Grid item md={6} sm={12} xs={12} >
                    <div alt={"ảnh img"} className={clsx(style.imgStore)} style={{backgroundImage : `url(${Store2})`}} ></div>
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