import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Home() {
  const classes = useStyles()
  const history = useHistory()
  const [id, setId] = useState(0)
  const [idError, setIdError] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null)
    setIdError(false);
    if (id && id === 0) {
      setIdError(true);
      return;
    }

    fetch(`http://localhost:3000/posts/${id}`, {
    }).then(res => res.json())
      .then(data => {
        const { message, title, body } = data
        if (message) {
          setError(message);
          return;
        }

        if (title && body) {
          history.push({
            pathname: '/post',
            post: { title, body }
          });
        } else {
          setError('Invalid Post Data');
        }
      })
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
      >
        Find Post By Its ID
      </Typography>


      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setId(e.target.value)}
          label="Post ID"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={idError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
      {error &&
        <h5>
          {error}
        </h5>
      }
    </Container>
  )
}