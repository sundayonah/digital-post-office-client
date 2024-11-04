// app/actions/getAllOrders.ts
import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma'; // Adjust the import according to your project structure
// import { getSession } from '@/lib/auth'; // Import your authentication utility

export async function getAllOrders() {
    // // Get the session or authentication token
    // const session = await getSession();

    // // Check if the user is an admin
    // if (!session || session.user.role !== 'admin') {
    //     return NextResponse.json({ error: 'Unauthorized access' }, { status: 403 });
    // }

    try {
        //     // Fetch all orders from the database
        //     const orders = await prisma.order.findMany();

        //     // Return the orders in the response
        //     return NextResponse.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}
