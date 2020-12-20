import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Skills extends React.Component {
  state = {
    dataHorizontal: {
      labels: ["JavaScript", "Ruby on Rails", "React", "Redux", "React Native", "TypeScript",],
      datasets: [
        {
          label: "Confortableness",
          data: [8, 6, 8, 8, 6, 5, 5, 0, 10, 6.5],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <h4 className="mt-5">My Skills/Tools</h4>
        <hr></hr>
        <br></br>
        {/* <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p> */}
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default Skills;
