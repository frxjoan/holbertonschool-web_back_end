#!/usr/bin/env python3
'''2. Measure runtime'''
wait_random = __import__("0-basic_async_syntax").wait_random
import asyncio


def task_wait_random(max_delay: int) -> asyncio.Task:
    """A function that returns a random delay between 0 and max_delay."""
    return asyncio.create_task(wait_random(max_delay))
