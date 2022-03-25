import { collection, DocumentData, getDocs } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../config/firebase-config';
import { LOADING_PRODUCT } from '../../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/reducingHooks';
import { ICard } from '../../../store/reducers/dataReducer';
import { CatalogPageView } from '../../views/CatalogPage/CatalogPage';

export const CatalogPageContainer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const products = useAppSelector(state => state.data['cards']);
  const dispatch = useAppDispatch();

  const handleOnClickSetClose = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const target = event.target as HTMLParagraphElement;
    if (target.className === 'modal') setOpen(false);
  };

  const handleOnClickSetOpen = () => {
    setOpen(true);
  };

  const handleOnClickNavigateToAddPage = () => {
    navigate(LOADING_PRODUCT);
  };

  const getData = useCallback(
    async todosCollectionRef => {
      const data = await getDocs(todosCollectionRef);
      dispatch({
        type: 'GET_CARDS',
        payload: data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id })),
      });
    },
    [dispatch],
  );

  useEffect(() => {
    const todosCollectionRef = collection(db, 'products');
    getData(todosCollectionRef);
  }, [getData]);

  console.log(products[0].seller);

  return (
    <>
      <CatalogPageView isClose={handleOnClickSetClose} isOpen={open} handleOnClickSetOpen={handleOnClickSetOpen} handleOnClickNavigateToAddPage={handleOnClickNavigateToAddPage} data={products} />
    </>
  );
};
