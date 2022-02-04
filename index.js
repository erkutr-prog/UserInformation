/**
 * @format
 */
 import {
    Navigation
} from "react-native-navigation";
import App from "./App";
import detailPage from "./detailPage";
import HeaderButton from "./HeaderButtons";

Navigation.registerComponent('newproject', () => App);
Navigation.registerComponent('detailPage', () => detailPage);
Navigation.registerComponent('HeaderButton', () => HeaderButton);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'newproject'
                    }
                }]
            }
        }
    });
});


App.options = {
    topBar: {
        title: {
            text: 'Users',
            color: '#F5D97E',
        },
        background: {
            color: '#F38181'
        },
        rightButtons: [
            {
              id: '2',
              component: {
                name: 'HeaderButton',
              },
            },
        ]
    }
}

