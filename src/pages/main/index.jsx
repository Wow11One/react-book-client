import React from 'react';
import BookListItem from './components/BookListItem';
import FilterBar from './components/filters/FilterBar';

const Index = () => {
    return (
        <div>
            <FilterBar />
            <BookListItem />
        </div>
    );
};

export default Index;