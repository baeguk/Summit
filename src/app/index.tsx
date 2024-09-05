import { Text, View, Image } from 'react-native'
import "../styles/global.css"
import { Input } from '@/components/input'

export default function Index() {
    return(
        <View className='flex-1 items-center justify-center'>
            <Image source={require('@/assets/logo.png')} 
                className='h-8'
                resizeMode='contain'
            />

            <View>
                <Input/>
            </View>
        </View>
    )
}