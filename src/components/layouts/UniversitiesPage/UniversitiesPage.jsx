//dependencies
import React, { useEffect } from 'react';
//components
import Box from '@material-ui/core/Box';
import Table from '../../global/CustomTable/CustomTable';
import SearchBar from '../../global/SearchBar/SearchBar';
import Spinner from '../../global/Spinner/Spinner';
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { setUniversities, setStarredUniversity } from '../../../actions/universities_actions';
//icons 
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const boxStyling = { width: '100%', height: 'auto', marginBottom: '2rem', borderRadius: '5px', padding: '2rem' }
const iconsStyling = { color: '#105BB6', cursor: 'pointer' }

const UniversitiesPage = () => {

    const dispatch = useDispatch();
    const { universities, loading } = useSelector(state => state.universitiesReducer);

    useEffect(() => {
        dispatch(setUniversities());
    }, [dispatch]);

    const filterRequiredKeysFromData = (data = []) => {
        return data.map((university, index) => {
            return {
                'Name': university['name'] ? university['name'] : '-',
                'Country': university['country'] ? university['country'] : '-',
                'Web-page': university['web_pages'] && university['web_pages'][0] ? university['web_pages'][0] : '-',
                'State-province': university['state-province'] ? university['state-province'] : '-',
                'Starred': university['Starred'] ?
                    <div><StarIcon style={iconsStyling} onClick={() => dispatch(setStarredUniversity(index))} /></div>
                    :
                    <div><StarBorderIcon style={iconsStyling} onClick={() => dispatch(setStarredUniversity(index))} /></div>,
            }
        });
    }

    const renderDeterminator = () => {
        if (loading) {
            return <Spinner />;
        } else if (universities.length === 0) {
            return <p>'No Results Found'</p>
        } else {
            return <Table data={filterRequiredKeysFromData(universities)} />
        }
    }

    return (
        <div className="universities-page">
            <div className="universities-page__content">
                <Box
                    boxShadow={1}
                    bgcolor="background.paper"
                    style={boxStyling}
                >
                    <SearchBar />
                </Box>
                {renderDeterminator()}
            </div>
        </div>
    )
}

export default UniversitiesPage
