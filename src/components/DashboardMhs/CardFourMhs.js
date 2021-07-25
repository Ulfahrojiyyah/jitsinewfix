import React from 'react';
import { Link } from 'react-router-dom';
import CardFourItemMhs from '../DashboardMhs/CardFourItemMhs';

function CardFourMhs(props) {
  return (
    <>
    <div class="container">
        <h1>Kuliah</h1>
            <div className='cards'>
                <div className="card-columns">
                    <CardFourItemMhs
                     src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
                     text='Pertemuan ke-4'
                     text2= 'Selasa, 13 Maret, 10:30 WIB'
                     label='Aljabar'
                     path='/ListKulaihMhs'
                    />
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                </div>
            </div>
        </div>
    </>
  );
}

export default CardFourMhs;