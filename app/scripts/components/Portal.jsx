import React from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { browserHistory } from 'react-router';
import chartActions from '../actions/chartActions.js';


class Portal extends React.Component {
 constructor(props) {
  super(props)
 }

  randomColorGenerator(){
    return "rgba(" + Math.ceil(Math.random() * 255) + ', '
    + Math.ceil(Math.random() * 255) + ', '
    + Math.ceil(Math.random() * 255) + ', '
    + '1)';
  }

  backgroundColors(){
    var arr = [];
    if (this.props.labels.length > 0){
      for (var i = 0; i < this.props.labels.length; i ++) {
        arr.push(this.randomColorGenerator());
      }
      return arr;
    }
  }

  updateChart() {
    var oldcanv = document.getElementById('myChart');
      document.getElementById('canvasHolder').removeChild(oldcanv);
      var canv = document.createElement('canvas');
      canv.id = 'myChart';
      document.getElementById('canvasHolder').appendChild(canv);
      var newCanvas = document.getElementById("myChart").getContext("2d");
    // canvas.clearRect(10,10,600,600);
    var myChart = new Chart(newCanvas, {
      type: this.props.type1,
      data: {
          labels: this.props.labels,
          datasets: [{
              label: this.props.label,
              data: this.props.data,
              backgroundColor: this.backgroundColors(),
              borderColor: 'white',
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
  }


  componentDidMount(){
    this.updateChart()
  }


  render() {
    let category1;
    let category2;
    let category3;
    let category4;
    let category5;
    let category6;
    let dateRange;
    let dateRange2;
    let singleCat;
    let chartType;
    return (
      <div className="main_container developerContainer">
        <div className="wrapperDiv">
          <form encType="multipart/form-data"
            onSubmit={(e) => {
                e.preventDefault();
                const info = {
                  cat1: category1.value,
                  cat2: category2.value,
                  cat3: category3.value,
                  cat4: category4.value,
                  cat5: category5.value,
                  cat6: category6.value,
                  dateRange: dateRange.value,
                };
                var updater =  this.updateChart.bind(this);
                  this.props.dispatchGetChartCatsData(info, updater);
                  category1.value = "None";
                  category2.value = "None";
                  category3.value = "None";
                  category4.value = "None";
                  category5.value = "None";
                  category6.value = "None";
            }}>
            <div className="leftSide">

                  <div className="auth_inputChart">
                  <label htmlFor="dateRange" >Select your time-span</label><br />
                      <select ref={(node) => { dateRange = node; }}  id="dateRange" required>
                        <option value="hour">Past hour</option>
                        <option value="day">Last 24 hours</option>
                        <option value="month">Past month</option>
                        <option value="month3">Past 3 months</option>
                        <option value="month6">Past 6 months</option>
                        <option value="year">Past year</option>
                      </select>
                  </div>

                   <div className="auth_inputChart">
                   <h2>Pick up to 6 categories</h2><br />
                    <label htmlFor="category1" ></label>
                      <select ref={(node) => { category1 = node; }}  id="category1" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>

                  <div className="auth_inputChart">
                    <label htmlFor="category2" ></label>
                      <select ref={(node) => { category2 = node; }}  id="category2" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>

                  <div className="auth_inputChart">
                    <label htmlFor="category3" ></label>
                      <select ref={(node) => { category3 = node; }}  id="category3" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>

                  <div className="auth_inputChart">
                    <label htmlFor="category4" ></label>
                      <select ref={(node) => { category4 = node; }}  id="category4" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>

                  <div className="auth_inputChart">
                    <label htmlFor="category5" ></label>
                      <select ref={(node) => { category5 = node; }}  id="category5" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>

                  <div className="auth_inputChart">
                    <label htmlFor="category6" ></label>
                      <select ref={(node) => { category6 = node; }}  id="category6" required>
                        <option value="None">None</option>
                        <option value="appliances">Appliances</option>
                        <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                        <option value="furniture">Furniture</option>
                        <option value="books">Books</option>
                        <option value="electronics">Electronics</option>
                        <option value="tools">Tools &amp; Home Improvement</option>
                      </select>
                  </div>
                  <div className="button_container">
                    <button
                      type="submit"
                      className="yellow_button"
                      onClick={(e)=>{
                        e.preventDefault();
                        category1.value = 'appliances';
                        category2.value = 'fashion';
                        category3.value = 'furniture';
                        category4.value = 'books';
                        category5.value = 'electronics';
                        category6.value = 'tools';
                      }}
                    >
                      Select All
                    </button>
                  </div>
                <div>
                    <div className="button_container">
                      <button type="submit" className="blue_button">
                        Create Chart
                      </button>
                    </div>
                  <br />
                </div>
            </div>
          </form>


          <form encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              const info = {
                singleCat: singleCat.value,
                dateRange: dateRange2.value,
              };
                var updater =  this.updateChart.bind(this);
                this.props.dispatchGetChartSingleData(info, updater);
                singleCat.value = "None";
                dateRange2.value = 'hour';
            }}>

            <div className="leftSide">
              <div className="auth_inputChart">
                <label htmlFor="dateRange2" >Select your time-span</label><br />
                  <select ref={(node) => { dateRange2 = node; }}  id="dateRange2" required>
                    <option value="hour">Past hour</option>
                    <option value="day">Past day</option>
                    <option value="month">Past month</option>
                    <option value="month3">Past 3 months</option>
                    <option value="month6">Past 6 months</option>
                    <option value="year">Past year</option>
                  </select>
              </div>
              <div className="auth_inputChart">
                  <label htmlFor="singleCat" >Select a category</label><br />
                  <select ref={(node) => { singleCat = node; }}  id="singleCat" required>
                    <option value="None">None</option>
                    <option value="appliances">Appliances</option>
                    <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                    <option value="furniture">Furniture</option>
                    <option value="books">Books</option>
                    <option value="electronics">Electronics</option>
                    <option value="tools">Tools &amp; Home Improvement</option>
                  </select>
              </div>
              <div className="button_container">
                <button type="submit" className="blue_button">
                  Create Chart
                </button>
              </div>

              <div className="auth_inputChart">
                <label htmlFor="chartType" ></label>
                  <select ref={(node) => { chartType = node; }}  id="chartType" required>
                    <option value="bar">Bar Chart</option>
                    <option value="line">Line Chart</option>
                    <option value="pie">Pie Chart</option>
                    <option value="polarArea">Polar Area Chart</option>
                  </select>
              <br />
              <br />
                <div className="button_container">
                  <button
                    type="submit"
                    className="blue_button"
                    onClick={(e) => {
                    e.preventDefault();
                    const info = {
                      type: chartType.value,
                    };
                      this.props.dispatchChartTypeChange(info);
                      category1.value = "None";
                      setTimeout(this.updateChart.bind(this), 500);
                 }}>
                    Change Chart
                  </button>
                </div>

            <br />
            <br />
            <br />
            <div className="button_container">
              <button className="blue_button" onClick={(e) => {
                e.preventDefault();
                browserHistory.push('/portalmap')
              }}>
                Go to Heat-Map
              </button>
            </div>

            </div>
            </div>
          </form>
          <div className="rightSide" id="canvasHolder">
            <canvas id="myChart" width="600" height="500"></canvas>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    type1: state.chartType.type,
    data: state.devChart.data,
    labels: state.devChart.labels,
    label: state.devChart.label,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetChartCatsData: (info, updater) => {
      dispatch(chartActions.getChartCatsData(info, updater))
    },
    dispatchGetChartSingleData: (info, updater) => {
      dispatch(chartActions.getChartSingleData(info, updater))
    },
    dispatchChartTypeChange: (info) => {
      dispatch(chartActions.getChartType(info))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
