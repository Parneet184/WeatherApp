import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {
    let img_url = "https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"

    
  return (
    <div style={{
  display: "flex",
  justifyContent: "center", // centers horizontally
  alignItems: "center",     // centers vertically
  minHeight: "50vh",        // optional: adjusts height for vertical centering
  marginTop: "30px"
}}>
        <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image= {img_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;</p>
          <p>Max Temp = {info.tempMax}&deg;</p>
          
          {/* <p>Icon = {info.icon}</p> */}
          <p>The weather is described as <b>{info.weather}</b> and feels like {info.feelsLike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}   