import {Component} from 'react'
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar/index'
import './index.css'

class Charts extends Component {
  state = {
    chartsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCharts()
  }

  getCharts = async () => {
    const response = await fetch(
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    )
    const data = await response.json()
    const a = data.data
    const updatedData = a.map(eachData => ({
      idNation: eachData['ID Nation'],
      idYear: eachData['ID Year'],
      nation: eachData.Nation,
      population: eachData.Population,
      slugNation: eachData['Slug Nation'],
      year: eachData.Year,
    }))
    this.setState({chartsData: updatedData, isLoading: false})
  }

  renderCharts = (chartsData, DataFormatter) => (
    <>
      <h1 className="charts-head">Charts</h1>
      <ResponsiveContainer className="pie-chart" width="30%" height={350}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={chartsData}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="population"
          >
            <Cell name="2021" fill="#fecba6" />
            <Cell name="2020" fill="#b3d23f" />
            <Cell name="2019" fill="#a44c9e" />
            <Cell name="2018" fill="#709E3C" />
            <Cell name="2017" fill="#35CDCD" />
            <Cell name="2016" fill="#354ACD" />
            <Cell name="2015" fill="#CD3535" />
            <Cell name="2014" fill="#E8F176" />
            <Cell name="2013" fill="#C676F1" />
          </Pie>
          <Legend
            iconType="square"
            layout="vertical"
            verticalAlign="middle"
            align="left"
          />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer className="bar-chart" width="50%" height={500}>
        <BarChart
          data={chartsData}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="year"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="year" name="2021" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="year" name="2020" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2019" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2018" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2017" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2016" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2015" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2014" fill="#fd7f0e" barSize="20%" />
          <Bar dataKey="year" name="2013" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer className="line-graph" width="40%" height={300}>
        <LineChart
          width={730}
          height={250}
          data={chartsData}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={DataFormatter} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  )

  render() {
    const {chartsData, isLoading} = this.state
    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
    return (
      <>
        <Navbar />
        <div className="charts">
          {isLoading ? (
            <Loader type="ThreeDots" color="#000000" height="50" width="50" />
          ) : (
            this.renderCharts(chartsData, DataFormatter)
          )}
        </div>
      </>
    )
  }
}

export default Charts
