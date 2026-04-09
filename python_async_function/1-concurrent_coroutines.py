#!/usr/bin/env python3
'''1. Concurrent coroutines'''
import asyncio
from bisect import insort
wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> list[float]:
    """Asynchronous coroutine that spawns wait_random n times with the specified"""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    results = []
    
    for coro in asyncio.as_completed(tasks):
        delay = await coro
        insort(results, delay)
    
    return results
