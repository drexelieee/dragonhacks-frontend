import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    textAlign: 'center'
  }
})

export default function Schedule(props) {
  const classes = useStyles()

  const CenterTableCell = props => (<TableCell align='center'>{props.children}</TableCell>)

  return (
    <Table align='center'>
      <TableHead>
        <TableRow>
          <CenterTableCell>Event</CenterTableCell>
          <CenterTableCell>Time</CenterTableCell>
          <CenterTableCell>Location</CenterTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <CenterTableCell>Registration Opens</CenterTableCell>
          <CenterTableCell>Saturday 9:00 AM</CenterTableCell>
          <CenterTableCell>1st Floor Lobby</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Team Building</CenterTableCell>
          <CenterTableCell>Saturday 11:00 AM</CenterTableCell>
          <CenterTableCell>Atrium</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Lunch</CenterTableCell>
          <CenterTableCell>Saturday 12:00 PM</CenterTableCell>
          <CenterTableCell>Atrium</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Opening Ceremony</CenterTableCell>
          <CenterTableCell>Saturday 1:00 PM</CenterTableCell>
          <CenterTableCell>Bossone Auditorium</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Hardware Opens</CenterTableCell>
          <CenterTableCell>Saturday 2:00 PM</CenterTableCell>
          <CenterTableCell>Parts Window</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Hacking Starts</CenterTableCell>
          <CenterTableCell>Saturday 2:00 PM</CenterTableCell>
          <CenterTableCell>Atrium</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Workshop 1</CenterTableCell>
          <CenterTableCell>Saturday 3:00 PM</CenterTableCell>
          <CenterTableCell>Room 302</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Workshop 2</CenterTableCell>
          <CenterTableCell>Saturday 5:00 PM</CenterTableCell>
          <CenterTableCell>Room 302</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Dinner</CenterTableCell>
          <CenterTableCell>Saturday 6:00 PM</CenterTableCell>
          <CenterTableCell>1st Floor</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Fun Event 1</CenterTableCell>
          <CenterTableCell>Saturday 7:00 PM</CenterTableCell>
          <CenterTableCell>1st Floor Lobby</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Workshop 3</CenterTableCell>
          <CenterTableCell>Saturday 8:00 PM</CenterTableCell>
          <CenterTableCell>Room 302</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Fun Event 2</CenterTableCell>
          <CenterTableCell>Saturday 9:00 PM</CenterTableCell>
          <CenterTableCell>1st Floor Lobby</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Devpost Registration Ends</CenterTableCell>
          <CenterTableCell>Saturday 10:00 PM</CenterTableCell>
          <CenterTableCell>N/A</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Midnight Snack</CenterTableCell>
          <CenterTableCell>Sunday 12:00 AM</CenterTableCell>
          <CenterTableCell>1st Floor</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Workshop 4</CenterTableCell>
          <CenterTableCell>Sunday 1:00 AM</CenterTableCell>
          <CenterTableCell>Room 302</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Fun Event 3</CenterTableCell>
          <CenterTableCell>Sunday 2:00 AM</CenterTableCell>
          <CenterTableCell>N/A</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Breakfast</CenterTableCell>
          <CenterTableCell>Sunday 8:00 AM</CenterTableCell>
          <CenterTableCell>1st Floor</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Lunch</CenterTableCell>
          <CenterTableCell>Sunday 12:00 PM</CenterTableCell>
          <CenterTableCell>1st Floor</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Hacking Ends</CenterTableCell>
          <CenterTableCell>Sunday 2:00 PM</CenterTableCell>
          <CenterTableCell>N/A</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Judging Starts</CenterTableCell>
          <CenterTableCell>Sunday 2:00 PM</CenterTableCell>
          <CenterTableCell>Atrium</CenterTableCell>
        </TableRow>
        <TableRow>
          <CenterTableCell>Closing Ceremony</CenterTableCell>
          <CenterTableCell>Sunday 4:00 PM</CenterTableCell>
          <CenterTableCell>Bossone Auditorium</CenterTableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}