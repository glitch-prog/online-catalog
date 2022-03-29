import { onAuthStateChanged } from 'firebase/auth';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../config/firebase-config';
import { CART_PAGE, LOADING_PRODUCT } from '../../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/reducingHooks';
import { ICard } from '../../../store/reducers/dataReducer';
import { CatalogPageView } from '../../views/CatalogPage/CatalogPage';

export const CatalogPageContainer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const products = useAppSelector(state => state.data['cards']);
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, user => console.log(user));

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

  const handleOnClickNavigateToCartPage = () => {
    navigate(CART_PAGE);
  };

  const addToCart = (el: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: el });
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

  return (
    <>
      <CatalogPageView
        isClose={handleOnClickSetClose}
        isOpen={open}
        handleOnClickSetOpen={handleOnClickSetOpen}
        handleOnClickNavigateToAddPage={handleOnClickNavigateToAddPage}
        data={products}
        handleOnClickNavigateToCart={handleOnClickNavigateToCartPage}
        // addToCart={addToCart}
      />
    </>
  );
};
