import React from 'react'
import { ImageDiv, Img, ImgCont, ImgDiv, QualityDiv, QualityText, Section, TextDiv, TopLine } from './AboutElements'
import Bells from "../../images/Bells-logo.png"
import Nacos from "../../images/nacoslogo.png"
import Cuab from "../../images/logo.png"
import { FaMoneyBill, FaThumbsUp } from 'react-icons/fa'
import {TbTruckDelivery} from "react-icons/tb"

const AboutSection = () => {
  return (
    <Section>
        <TextDiv>
       <b>Vision: </b> Making  Achieve more Productivity, Yield, and Income. <br/>
       <br/>
        CuabFarms is founded by a team of undergraduates from Crescent University , Abeokuta in the year 2022. CuabFarms is Abeokuta's largest commercial crop & Livestock E-Marketplace, providing a wide choice of quality crops to other sub distributors and wholesalers. CuabFarms is bringing accessibility of quality crops and livestock products for a faster and less resource consuming experience. 
        </TextDiv>
        <QualityDiv>
            <ImgCont>
            <FaThumbsUp/>
            <TopLine>Best Quality</TopLine>
            <QualityText>Products cultivated using the best set of practices</QualityText>
            </ImgCont>
            <ImgCont>
            <FaMoneyBill/>
            <TopLine>Cash on Delivery</TopLine>
            <QualityText>Ease to Pay Cash Payment for your products When you received</QualityText>
            </ImgCont>
            <ImgCont>
            <TbTruckDelivery/>
            <TopLine>Fast Delivery</TopLine>
            <QualityText>Your Order is very prior to us, we deliver it faster as much we can.</QualityText>
            </ImgCont>
        </QualityDiv>
        <ImageDiv>
            <ImgDiv><Img src={Bells} /></ImgDiv>
            <ImgDiv><Img src={Nacos} /></ImgDiv>
            <ImgDiv><Img src={Cuab} /></ImgDiv>
        </ImageDiv>
    </Section>
  )
}

export default AboutSection