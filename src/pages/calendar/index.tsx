import React from 'react'

const Calendar = () => {
  const calendarDates = [
    {
      day: 1,
      gift: 'Reading together',
      description: 'Schedule decision to read and discuss the chapters',
    },
    {
      day: 2,
      gift: 'Letter',
      description: 'Read the letter I wrote to you.',
    },
    {
      day: 3,
      gift: 'Artist',
      description: 'Proof that you are the artist among us.',
    },
    {
      day: 4,
      gift: 'Letter',
      description: 'Write a letter to me.',
    },
    {
      day: 5,
      gift: 'Memories',
      description: 'Drawing each other as we did in June 2022.',
    },
    {
      day: 6,
      gift: 'Photos',
      description: 'Choosing favorite photos from our wedding for the album.',
    },
    {
      day: 7,
      gift: 'Christmas session',
      description: 'Silly Christmas movie',
    },
    {
      day: 8,
      gift: 'Bucket List',
      description:
        'make a list of things you want to do together in the next 5 years. * 1 item per year *',
    },
    {
      day: 9,
      gift: 'Bucket list',
      description:
        'Make a list of things do you want to do before you die. * 10 items *',
    },
    {
      day: 10,
      gift: 'Book Club',
      description: 'Book discuss',
    },
    {
      day: 11,
      gift: 'Architecture',
      description: 'Drawing our future house.',
    },
    {
      day: 12,
      gift: 'Architecture',
      description: 'Choosing the style/design of our future house.',
    },
    {
      day: 13,
      gift: 'Book Club',
      description: 'Discuss the chapters.',
    },
    {
      day: 14,
      gift: 'Christmas movie session',
      description: 'Watching a Christmas movie together.',
    },
    {
      day: 15,
      gift: 'Bucket List 2024 together',
      description: 'Make a list of things you want to do together in 2024.',
    },
    {
      day: 16,
      gift: 'Recipe',
      description:
        'Choose a recipe and cook together. * I will cook with you *',
    },
    {
      day: 17,
      gift: 'Norwegian',
      description: 'Trying to speak Norwegian.',
    },
    {
      day: 18,
      gift: 'Sing a song',
      description:
        'Choose a song to sing together. * I will sing with you, so learn how to play *',
    },
    {
      day: 19,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 20,
      gift: 'Food',
      description: "* I'll cook to you *",
    },
    {
      day: 21,
      gift: 'Christmas Photo Session',
      description: "We'll take a Christmas photo session together",
    },
    {
      day: 22,
      gift: 'Massage',
      description: "I'll give you a massage.",
    },
    {
      day: 23,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 24,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 25,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 26,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 27,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 28,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 29,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 30,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
    {
      day: 31,
      gift: 'Kisses and Hugs',
      description:
        "After pick up me at the airport, I'll give you a lot of kisses and hugs.",
    },
  ]

  const today = new Date()

  return (
    <div className="bg-christmas h-full bg-cover bg-center py-16 px-8">
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        {calendarDates.map((item: any) => (
          <div key={item.day} className="p-4 border border-gray-300 bg-white">
            <p className="text-xl font-bold">{item.day}</p>
            <div className="flex items-center justify-center flex-col">
              {item.day > today.getDate() ? (
                <>
                  <img
                    src="https://media1.giphy.com/media/J8dzvb7lj7EDvMUDXc/giphy.gif?cid=ecf05e47uqfqmt5stff8uot1npu9ogcza68wuw3dl491nx91&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                    alt="teste"
                  />
                </>
              ) : (
                <>
                  <p className="my-2">{item.gift}</p>
                  <p className={'text-sm md:text-[11px]'}>{item.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
