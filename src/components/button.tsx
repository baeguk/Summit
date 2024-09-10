import { Text, TextProps, TouchableOpacity, TouchableOpacityProps} from "react-native"

type Variants = 'primary' | 'secondary'

type ButtonProps = TouchableOpacityProps & {
    variant?: Variants
    isLoading?: boolean
}

function Button({
    variant = "primary",
    children,
    isLoading,
    ...rest
}: ButtonProps) {
    return <TouchableOpacity
        className="w-full h-11 flex-row items-center justify-center rounded-lg gap-2"
        {...rest}
    >
        {children}
    </TouchableOpacity>
}

function Title({ children }: TextProps) {
    return <Text className='text-green-500 text-lg font-bold'>{children}</Text>
}

Button.Title = Title

export {Button}