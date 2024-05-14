import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
 
const Login = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error,setError] = useState("");
 
    const onSubmitSignup = async (e) => {
      e.preventDefault()
     
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            localStorage.setItem("token",user?.refreshToken)
            navigate("/");
            // ...
        })
        .catch((error) => {
            setError(error?.message)
        });
 
   
    }
 
  return (
    <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'}>Login in to your account</Heading>
              </Stack>
              <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" typeof='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                  </FormControl>
                  <Stack spacing={10}>
                    <Text color="red">{error}</Text>
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'start'}
                      justify={'space-between'}>
                      <Checkbox>Remember me</Checkbox>
                    </Stack>
                    <Button
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      onClick={onSubmitSignup}>
                      Login
                    </Button>
                  </Stack>
                </Stack>
                <Text onClick={()=>navigate("/signup")} cursor={"pointer"} fontSize={'lg'} color={'gray.600'} py={2}>
                  Signup
                </Text>
              </Box>
            </Stack>
          </Flex>
        );
}
 
export default Login