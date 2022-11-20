import { Blur, Container, Content, Img } from './style';
import noimg from '../../assets/images/noimg.png';
import category from '../../assets/images/category.png';

export const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || 'Category Name'}</Content>
    </Container>
  );
};

export default CategoryCard;