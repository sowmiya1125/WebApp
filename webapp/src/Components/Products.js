import { Box, Button, Card, Grid, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import SearchIcon from '@mui/icons-material/Search';
import products from './products.json';
import ProductList from './ProductList';
import AddProductModal from './AddProductModal';

function Products(){
    const [list, setList] = useState(products);
    const [modalOpen, setModalOpen] = useState(false);
    const [keyword, setKeyword] =useState("")
    const handleSearch = () => {
        console.log(list.filter((li)=>li.name));
    }
    const handleChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }
    const handleModal = () => {
        if(modalOpen){
            setModalOpen(false)
        }
        else{
            setModalOpen(true)
        }
    }
    return(
        <div>
            <Box sx={{display:"flex",margin:2}}>
            <Grid item xs={10}>
                <ValidatorForm onSubmit={()=>handleSearch()}>
                <TextValidator
                color="success"
                                                id="input-with-icon-textfield"
                                                variant="outlined"
                                                fullWidth
                                                label="Search Products"
                                                value={keyword}
                                                onChange={handleChangeKeyword}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton className="search-btn" style={{ cursor: "pointer" }} type="submit">
                                                                <SearchIcon />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                      
                </ValidatorForm>
            </Grid>
            <Grid item xs={2} sx={{marginLeft:2}}>
                <Button color="success" variant="contained" onClick={()=>handleModal()}>Add products</Button>
            </Grid>            
            </Box>
            <Grid container spacing={2} sx={{padding:2}}>
                {list.map((li)=>{
                    return(
                        <Grid item xs={3} key={li.id}>
                            
                            <ProductList{...li}/>
                        
                            </Grid>
                    )
                })}
            </Grid>
            <AddProductModal open={modalOpen} handleModal={handleModal}/>
        </div>
    )
}
export default Products;