import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class Skills extends React.Component {
  state = {
    dataHorizontal: {
      labels: ["JavaScript", "Ruby", "React"],
      datasets: [
        {
          label: 'Confortableness',
          data: [6, 4, 5.5, 1,2, 10, 2.3, 0],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)'
          ],
          borderWidth: 1
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h4 className='mt-5'>My Skills</h4>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default Skills;