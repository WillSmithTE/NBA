import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  return (
    <>
    <h1>Test heading :)</h1>
      <table {...getTableProps()}>
        <thead>
          <h1>I'm in the head</h1>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
    </>
  )
}

function TeamsTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Teams',
        columns: [
          {
            Header: 'Team',
            accessor: 'team',
          },
          {
            Header: 'Win Efficiency',
            accessor: 'winEfficiency',
          },
          {
            Header: '2019-20 Value',
            accessor: 'value2019_20',
          },
          {
            Header: 'Wins',
            accessor: 'wins',
          },
          {
            Header: '2K Rating',
            accessor: 'rating2k',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(2000), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

function PlayersTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Players',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Rating',
            accessor: 'rating',
          },
          {
            Header: '2019-20 Value',
            accessor: 'value2019_20',
          },
          {
            Header: 'Wins',
            accessor: 'wins',
          },
          {
            Header: '2K Rating',
            accessor: 'rating2k',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(2000), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TeamsTable
