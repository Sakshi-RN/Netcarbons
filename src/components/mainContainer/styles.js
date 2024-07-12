import { StyleSheet } from 'react-native'
import { Colors } from '../../theme/colors'
import { dynamicSize } from '../../utilities/helpers'

const styles = StyleSheet.create({
    containerWrapper:{
        flex: 1,
		// backgroundColor:Colors.WHITE
    },
	fluid: {
		// flex: 1,
		paddingHorizontal: dynamicSize(12, true),
	},
})

export default styles
