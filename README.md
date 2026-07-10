# KanjiDamageQuiz
## Quiz program for Kanji Damage (HTML, CSS, JS)

>What is the goal of this quiz?
>
>Its goal is just recognizing kanji characters faster.
>
>Make a faster quiz that lessen the time to recall a kanji for about a minute.
>
>This quiz is just supplementary for your studies and must not be the main form
>    of how you learn kanji.

## How to use: 
    > most preferred way to use is downloading the whole zip
    >    but you can use this link 
    [Quiz Now](https://jvmedes.github.io/KanjiDamageQuiz/)
    [Kanji Damage - Kanji List](https://www.kanjidamage.com/kanji)

  ### Windows
    1.  Download the zip file and extract
    2.  Locate index.html and open in Browser
    3.  Enter starting Kanji Number(use KD kanji list)
    4.  Enter how much kanji that the quiz will contain;
    5.  Save then click Start
    
   ### Android
    1.  Download the zip file and extract
    2.  Download anWriter
    3.  Open anWriter and locate index.html
    4.  Enter starting Kanji Number(use KD kanji list)
    5.  Enter how much kanji that the quiz will contain;
    6.  Save then click Start

  ### Change Questions
    1. Go to Kanji Damage Kanji List
    2. Look at the list and take note what number is your kanji start will be
    3. Decide how many kanji you want(you will know what are the questions by counting
            from kanji start to how much you want.)
    4. Edit Kanji Start and Test Count value
    5. Click Save then Start

    ### Note that saving will only works while the browser is not been reloaded. If you
    want to save it permanently, you have to edit the index.html line 30 and 31.
    change the values from 1 to your desired value.
    
anWriter [Download Here](https://play.google.com/store/apps/details?id=com.ansm.anwriter&pcampaignid=web_share)

## Notes:
- you must not reload while in the quiz(it will back to default settings)
- in official list, there is no #584 and #669. entering this numbers just
        shifts to the next available in list. (ex: 584 == 585)

### Advance Folder
    This folder contains an html that have function to enable you to edit kanji meanings
        to your own preferred words. 

    1. Open edit_answers.html
        Windows : just open it in browser
        Android : open anWriter then locate it and open(hit play)
    2. Enter the starting index of kanji (refer to Kanji Damage Kanji list)
    3. Enter how many you want to edit (from index you enter to how many from it)
    4. Edit the meaning of the corresponding kanji you want to modify with.
    5. Hit Save then Ok. 
        (you can still edit other kanji by editing the kanji start, kanji count then hit. 
            then edit and save.)
    6. Hit Export if you are ready to save all the edited meanings.
            (the edited meanings will start to download.)
    7. Go to KanjiDamageQuiz folder and delete kanjidata.js
            (the location of KDQ is where you extracted it.)
    8. Put the downloaded kanjidata.js (from your export) to the KanjiDamageQuiz Folder.

    You can now use your desired meaning in the quiz program.

## Advance Folder Notes:
    - Do not put double Quotation Marks in meanings. Single is ok. its just hard to 
            work with double quotation in code. (for me at least)
    - Remember that you can just put the default kanjidata.js to other folder just incase if
        you want to return it to previous values.

  >I might release a "how to use video", but for now you can just download it and try to understand how it works.
