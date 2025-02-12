'use client';

import { Container, Typography, Button, Card, CardContent, CardMedia, Box, Grid, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import TimerIcon from '@mui/icons-material/Timer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="hero-section bg-gradient-to-r from-primary-color to-primary-color-dark text-white">
        <Container maxWidth="lg" className="py-20">
          <Typography variant="h2" component="h1" className="mb-6 font-bold text-center">
            Rent Premium Laptops 💻
          </Typography>
          <Typography variant="h5" className="mb-8 text-center">
            Experience hassle-free laptop rentals for work, study, or gaming 🚀
          </Typography>
          <Box className="flex justify-center">
            <Button 
              variant="contained" 
              size="large" 
              color="secondary"
              sx={{ borderRadius: '50px', px: 4 }}
            >
              Get Started ✨
            </Button>
          </Box>
        </Container>
      </section>

      <section className="features-section py-16">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-8 text-center h-full">
                <Typography variant="h3" className="mb-4">
                  Trusted by 500,000+ Users 🏆
                </Typography>
                <Box className="flex justify-center gap-2 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <StarIcon key={star} color="primary" />
                  ))}
                </Box>
                <Typography variant="body1">
                  Join our growing community of satisfied users
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-8 h-full">
                <Typography variant="h4" className="mb-6">
                  Quick Setup in 3 Steps ⚡
                </Typography>
                <Box className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon color="primary" />
                    <Typography>Browse and select your laptop</Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon color="primary" />
                    <Typography>Complete quick verification</Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircleIcon color="primary" />
                    <Typography>Get your laptop delivered</Typography>
                  </div>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="laptops-section py-16 bg-gray-50">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center mb-12">
            Featured Laptops 🔥
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Dell XPS", price: "N5,000/hr", img: "/dell.jpg", specs: "16GB RAM • 512GB SSD" },
              { name: "MacBook Pro", price: "N6,000/hr", img: "/apple.jpg", specs: "M1 Chip • 8GB RAM" },
              { name: "HP Spectre", price: "N4,500/hr", img: "/hp.jpg", specs: "i7 • 16GB RAM" },
            ].map((laptop) => (
              <Grid item xs={12} sm={6} md={4} key={laptop.name}>
                <Card elevation={2} className="h-full">
                  <CardMedia
                    component="img"
                    height="200"
                    image={laptop.img}
                    alt={laptop.name}
                  />
                  <CardContent>
                    <Typography variant="h6" className="mb-2">
                      {laptop.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="mb-2">
                      {laptop.specs}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <Typography variant="h6" color="primary">
                        {laptop.price}
                      </Typography>
                      <Button variant="outlined" color="primary" startIcon={<TimerIcon />}>
                        Rent Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="testimonials-section py-16">
        <Container maxWidth="lg">
          <Typography variant="h3" className="text-center mb-12">
            What Users Say 🗣️
          </Typography>
          <Grid container spacing={4}>
            {[
              { text: "Best laptop rental service ever! Super fast delivery.", author: "John D.", role: "Freelancer" },
              { text: "Excellent condition laptops and amazing customer service!", author: "Sarah M.", role: "Student" }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={2} className="p-6">
                  <Typography variant="body1" className="mb-4">
                    ❝ {testimonial.text} ❞
                  </Typography>
                  <Typography variant="subtitle1" color="primary" className="font-bold">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
}
