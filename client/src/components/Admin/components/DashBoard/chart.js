// import React, {useEffect} from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../actions/OrderAction";
import React, {useState, useEffect} from 'react'

import { Pie, Doughnut} from 'react-chartjs-2';

function PieChart() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Iphone', 'Xiaomi', 'Realme',
                     'Oppo', 'Samsung'],
            datasets: [
              {
                label: 'Average Population',
                
                backgroundColor: [
                  '#B21F00',
                  '#C9DE00',
                  '#2FDE00',
                  '#00A6B4',
                  '#6800B4'
                ],
                hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
                ],
                // data: [600005, 500009, 800000, 800001, 500006]
                data: [650, 572, 800, 860, 565]
              }
            ]
          });
    }, [])

    return (
        <div>
            <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Population PIE Chart',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        {/* <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Population Doughnut',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
        </div>
    )
}

export default PieChart;