import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { BrandProducthunt } from 'tabler-icons-react';


























import './card.css'

const TourCard=(props)=> {
  const theme = useMantineTheme();



  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
  
    <div style={{ width: 500,height:900, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          {console.log(props.imageCover)};
          
          <Image src={require(`./../images/${props.imageCover}`)} height={160} alt="Bengaluru" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text className='name' weight={500}>name:{props.name}</Text>
        
        </Group>

        <Text  className='day' size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          number of days:{props.days}
        </Text>


        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          price:Rs {props.price}
        </Text>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          description:{props.description}
        </Text>
        <button id="rzp-button1">Pay</button>
      </Card>
    </div>
  );
}



export default TourCard;

{/* <TourCard description={product.description} name={product.name} key={int} price={product.price} days={product.days} email={product.email}  ></TourCard> */}