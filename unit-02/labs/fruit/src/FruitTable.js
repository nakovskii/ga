import React from 'react'

class FruitTable extends React.Component {
  render() {
    return (
      <table style={{ borderSpacing: 20, borderStyle: 'solid' }}>
        <tbody>
          {this.props.list.map((fruitList, index) => (
            <tr key={index}>
              {fruitList.map((fruit, i) => (
                <td key={i}>
                  {fruit}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default FruitTable
