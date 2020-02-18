import React from 'react';
import './App.css';
import CustomTabs from './components/Tabs';

const App = () => {
    return (
        <div>
            <CustomTabs keys={['abc', 'def']}/>
        </div>
    );
};

export default App;
