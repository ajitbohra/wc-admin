/** @format */
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

import { charts as ordersCharts } from '../../analytics/report/orders/config';
import { charts as productsCharts } from '../../analytics/report/products/config';
import { charts as revenueCharts } from '../../analytics/report/revenue/config';
import { charts as categoriesCharts } from '../../analytics/report/categories/config';
import { charts as couponsCharts } from '../../analytics/report/coupons/config';
import { charts as taxesCharts } from '../../analytics/report/taxes/config';

const allCharts = ordersCharts.map( d => ( { ...d, endpoint: 'orders' } ) ).concat(
	productsCharts.map( d => ( { ...d, endpoint: 'products' } ) ),
	revenueCharts.map( d => ( { ...d, endpoint: 'revenue' } ) ),
	categoriesCharts.map( d => ( { ...d, endpoint: 'categories' } ) ),
	couponsCharts.map( d => ( { ...d, endpoint: 'orders' } ) ),
	taxesCharts.map( d => ( { ...d, endpoint: 'taxes' } ) )
);
export const showCharts = allCharts.map( d => ( {
	...d,
    show: false,
} ) );
console.log(showCharts);
export const getChartFromKey = key => allCharts.filter( d => d.key === key );
