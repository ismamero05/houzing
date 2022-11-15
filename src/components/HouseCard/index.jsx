import { Container, Content, Details, Img, Icons, Divider } from './style';
// import noimg from '../../assets/images/noimg.png';

export const HouseCard = ({data = {}}) => {
  const { attachments, houseDetails, salePrice, price, address, city, country, description } = data
  return (
    <Container>
      <Img src={attachments && attachments[0]?.imgPath} />
      <Content>
        <div className='subTitle inline'>{address}</div>
        <div className='info inline'>{description}, {city}, {country}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className='info'>{houseDetails?.beds || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>{houseDetails?.bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>{houseDetails?.garage || 0} Garages </div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className='info'>{houseDetails?.area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className='info'>${salePrice || 0}/mo</div>
          <div className='subTitle'>${price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;