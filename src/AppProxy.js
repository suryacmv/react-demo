

import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import ListComponent from './components/iterator-ex/ListComponent';
import { ExportExample } from './components/named-vs-default/Named-vs-Sefault';
import Parent from './components/parent-child-comm/Parent';
import WishFriends from './components/props-example/PassingPropsEx';
import UseStateEx from './components/usestate-example/UseStateEx';
import Header from './notes/Header';
import Notes from './notes/Notes';
import StyleSheet from './components/apply-style/StyleSheet'
import FormEx from './components/forms-ex/FormEx';
import PostRequestEx from './components/useEffect-example/PostRequestEx';
import UseEffectEx from './components/useEffect-example/UseEffectEx';


const AppProxy = () => {
    return (
        <div>
            {/* Named Export vs Default Export */}
            <ExportExample />


            {/* passing properties to child component */}
            <WishFriends />


            {/* useState & useEffect Hooks. */}
            <UseStateEx />

            {/* TODO: Failing. need to check for the reason. */}
            {/* <UseEffectEx /> */}


            {/* Child invoking parent's */}
            <Parent />


            {/* Conditional Rendering */}
            <ConditionalRendering />


            {/* Iterate List of elements */}
            <ListComponent />


            {/* Apply Styles to the components */}
            <StyleSheet />

            {/* Form Example */}
            <FormEx />

            <PostRequestEx />
            <UseEffectEx />

        </div>
    )
}

export default AppProxy