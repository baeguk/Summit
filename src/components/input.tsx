import { TextInput, View, TextInputProps } from "react-native"
import { ReactNode } from "react"
import { colors } from "@/styles/colors"
type Variants = 'primary' | 'secondary' | 'tertiary'


type InputProps = {
    children: ReactNode
    variant?: Variants
}

function Input({ children, variant = 'primary' }: InputProps) {
    return <View>{children}</View>
}

function Field({...rest}: TextInputProps) {
    return(
        <TextInput 
            placeholderTextColor={colors.gray[200]} 
            className='text-zinc-100 text-lg font-regular pl-3'
        {...rest}
        />
    )
        
}

Input.Field = Field

export { Input }