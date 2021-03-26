import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default function PostCard({ post }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          title={post.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { post.body }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}