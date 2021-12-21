import React from "react";
import axios from 'axios';
import FoodRow from './FoodRow'
import {Spinner} from 'react-bootstrap';

class Food extends React.Component {

  state = {
    isLoading: true,
		foods: []
	};

	getFoods = async () => {
    axios
    .get('http://106.249.253.148:8077/api/food')
    .then(({data}) => {
      this.setState({
        isLoading: false,
        foods: data
      })
    })
	};

  componentDidMount() {
		this.getFoods()
	}

  render() {
    const { isLoading , foods } = this.state;
    return (
      <div className="container w-auto">
        {isLoading ? 
          <div style={{ marginTop: '50px' }}>  
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
        :
        <div className="w-auto" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>내가 좋아하는 음식은?</h3>
          {foods.map((food) => (
            <FoodRow 
              key={food.idx}
              idx={food.idx}
              name={food.name}
              imageUrl={food.imageUrl}
              rating={food.rating}
              likeCount={food.likeCount}
              handleClickLike = {this.handleClickLike}
            >
            </FoodRow>
          ))}
        </div>
        }
      </div>
    );
  }

  /*
    - handleClickLike
    이 음식 좋아요
  */
    handleClickLike = (idx) => {
      console.log(idx)
      axios({ 
        method: 'post', 
        url: "http://106.249.253.148:8077/api/food-like", 
        data: 'idx=' + idx, 
        dataType: 'text' })
      .then(({data}) => {
        console.log(this.state.foods[0])
      })
   }
}

export default Food;