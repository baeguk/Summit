import { Text, View, Image } from 'react-native'
import "../styles/global.css"
import { Link } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from "@/styles/colors"

export default function Index() {
    
return(
    <View className='flex-1 items-center justify-center'>
        <Image source={require('@/assets/logo.png')} 
            className='h-12'
            resizeMode='contain'
        />

        <View className='w-full'>
            <Input >
                <View className='flex-row items-center p-4 rounded-xl ml-5 mr-5 m-3 border border-zinc-400'>
                    <MaterialCommunityIcons
                            name='ticket-confirmation-outline'
                            color={colors.green[200]}
                            size={20}
                    />
                    <Input.Field
                        placeholder='Código do ingresso'
                    />
                </View>
            </Input>
        </View>
        <View className='border-b py-3 bg-orange-500 rounded-lg flex-row items-center ml-5 mr-5 m-2'>
                <Button>
                    <Button.Title>ACESSAR CREDENCIAL</Button.Title>
                </Button>
            </View>

            <Link
                href='/register'
                className='text-white'
            > Ainda não possui ingresso?</Link>
    </View>
   )
}
