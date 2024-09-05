import { TextInput, View } from "react-native"
import { ReactNode } from "react"
import { colors } from "@/styles/colors"
import { MaterialCommunityIcons } from '@expo/vector-icons'

type TextInputProps = {
    children: ReactNode
}

function Input({ children }: TextInputProps) {
    return <View>{children}</View>
}

function Field({...rest}: TextInputProps) {
    return <View>
        {/* <MaterialCommunityIcons name='ticket-confirmation-outline' color={colors.green[200]} size={20} />  */}
        <TextInput placeholderTextColor={colors.gray[200]} className='text-zinc-100 text-lg font-regular'/>
    </View>
}

Input.Field = Field

export { Input }