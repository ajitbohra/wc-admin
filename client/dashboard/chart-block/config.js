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

const allCharts = ordersCharts.concat(
	productsCharts,
	revenueCharts,
	categoriesCharts,
	couponsCharts,
	taxesCharts
);
export const getChartFromKey = key => allCharts.filter( d => d.key === key );
