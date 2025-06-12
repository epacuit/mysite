import html2text
import os
def esslli_courses(): 
    coteacher_name = "Wesley H. Holliday"
    co_teacher_web="https://sites.google.com/site/wesholliday/"
    title="Ten Puzzles and Paradoxes about Knowledge and Belief"
    times='14:00 - 15:30'
    short_title='epistemic-puzzles'
    year=2013
    nasslli = False
    non_esslli_nasslli_school = False
    school_url="http://esslli2013.de/"
    date='August 11 - 16, 2013'
    room=''
    loc="D&uuml;sseldorf, Germany"


    desc='''Reasoning about the knowledge and beliefs of a single agent or group of agents  is an interdisciplinary concern spanning computer science, mathematics, game theory and philosophy.   Inspired, in part, by issues in  these different "application" areas, many different notions of knowledge and belief have been identified and analyzed in the formal epistemology literature.        The  main challenge   is not to argue that one particular account  of belief or knowledge is <em>primary</em>,  but, rather,  to explore the logical space of definitions and identify interesting relationships between the different notions.   A second challenge (especially for students) is to keep track of the many different formal frameworks used in this broad literature   (typical examples include modal logics of knowledge and belief or the theory of subjective probability, but there are many variants).  This foundational course will introduce students to  key methodological, conceptual and technical issues that arise when designing a formalism to make precise intuitions about the knowledge and beliefs of a group of agents.

<br>

 The course will serve as a introduction to epistemic logic and Bayesian epistemology; however, we will not follow the standard textbook presentation of this material. For example, as found in <em>Reasoning about Knowledge</em> by Fagin, Halpern, Moses and Vardi,  <em> Dynamic Epistemic Logic</em> by van Ditmarsch, van der Hoek and Kooi or  <em> Modal Logic for Open Minds</em>  by  van Benthem.    Rather than focusing on the technical details of  a specific formalism, we will focus on the key foundational questions (of course, introducing formal details as needed).      There are good reasons for taking an "issue-oriented" approach to introducing formal models of knowledge and belief (especially at a summer school such as ESSLLI).  Many of the recent developments concerning formal models of knowledge and belief have been driven by analyzing concrete examples. These range from toy examples, such as the infamous muddy children puzzle  to philosophical quandaries, such as the knowability paradox or the surprise examination paradox, to everyday examples of social interaction. Different formal frameworks are then judged, in part, on how well they conform to the analyst's intuitions about the relevant set of examples.   Thus, in order to appreciate the usefulness  and limits of the different  formal frameworks,   it is important to understand the     issues that motivate the key technical developments.'''
    print desc
    print html2text.html2text(desc)
    day1_slides='Lecture1.pdf'

    day1_title='Surprise Examination'
    day1='''The main reading for the course include the following papers:

<ul>
<li> W. Holliday, <a href="https://philosophy.berkeley.edu/file/814/el_episteme.pdf">Epistemic Logic and Epistemology</a>, Handbook of Formal Philosophy, Springer, forthcoming</li>
 <li> E. Pacuit, <a href="http://web.pacuit.org/papers/phco1.pdf">Dynamic Epistemic Logic I: Modeling Knowledge and Belief</a>, Philosophy Compass, 2013   </li>
 <li> E. Pacuit, <a href="http://web.pacuit.org/papers/phco2.pdf">Dynamic Epistemic Logic II: Logics of Information Change</a>, Philosophy Compass, 2013 </li>

</ul>'''


    day2_slides ='Lecture2.pdf'

    day2_title='Margin of Error Argument & Fitch\'s Paradox'
    day2='''On the Margin of Error argument: <a href="http://www.jstor.org/stable/2254332"> Inexact Knowledge</a><br>

On Fitch's Paradox:<a href="http://plato.stanford.edu/entries/fitch-paradox/"> Fitch's Paradox of Knowability</a><br>
 On Fitch's Paradox and the Dynamics of Knowability: <a href="http://www.illc.uva.nl/lgc/translation/papers/WhatOne.pdf">What One May Come to Know</a>, <a href="http://dare.uva.nl/document/45522">Actions that Make Us Know</a>, <a href="http://cgi.csc.liv.ac.uk/~wiebe/pubs/Documents/theo_1119_published%20article.pdf"> Everything is Knowable </a>
 On the Puzzle of the Gifts: <a href="https://philosophy.berkeley.edu/file/836/Uniform_Substitution.pdf">Information Dynamics and Uniform Substitution</a>
 '''

    day3_slides='Lecture3.pdf'

    day3_title = 'Bradenburger-Keisler Paradox and Agreeing to Disagree'
    day3 = '''On the Brandenbruger-Keisler Paradox: <a href="http://pages.stern.nyu.edu/~abranden/itbg-08-03-06.pdf">An Impossibility Theorem on Beliefs in Games</a>, <a href="http://www.jstor.org/stable/40210791">Understanding the Brandenburger-Keisler Paradox</a>
<br>
 On the Agreeing to Disagree Theorem: <a href="http://www.ma.huji.ac.il/raumann/pdf/Agreeing%20to%20Disagree.pdf">Agreeing to Disagree</a>, <a href="http://www.tau.ac.il/~samet/papers/generalized-agreement-theorem.pdf">Agreeing to Disagree: The Non-Probabilistic Case</a>, <a href="http://www.tau.ac.il/~samet/papers/Approximating%20Common%20Knowledge.pdf">Approximating Common Knowledge with Common Belief</a>
 '''



    day4_slides = 'Lecture4.pdf'
    day4_title = 'The Absent Minded Driver and Paradoxes of Backward Induction'
    day4 = '''On the Absent Minded Driver: <a href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.58.4679&rep=rep1&type=pdf">On the Interpretation of Decision Problems with Imperfect Recall</a>
<br>
 On Common Knowledge of Rationality and Backwards Induction: <a href="http://www.cs.cornell.edu/home/halpern/papers/rational.pdf">Substantive Rationality and Backwards Induction</a>
  '''
    day5_slides='Lecture5.pdf'
    day5_title = 'Iterated Belief Revision and First-Order Epistemic Logic'
    day5 = '''On iterated belief revision: <a href="http://dspace.mit.edu/openaccess-disseminate/1721.1/49853">Iterated Belief Revision</a>, <a href="http://web.pacuit.org/papers/itbel-tark-proc-v5.pdf">When is an example a counterexample?</a>
<br>
 On quantified epistemic logic: <a href="https://philosophy.berkeley.edu/file/863/RRQEL.pdf">Roles, Rigidity, and Quantification in Epistemic Logic</a>
 '''

    directory = str(year) + "/"  + short_title 
    if not os.path.exists(str(year)):
        os.mkdir(str(year))
    os.mkdir(directory)

    if coteacher_name != '':
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
  - name:  {}
    web: {}
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    else: 
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    print index_md


    print index_md

    f = open(directory + "/index.md", "a")
    f.write(index_md)
    f.close()

    day1_md = '''---
lecture: 1
title: {}
file: {}
date:
---

{}'''.format(day1_title, day1_slides, html2text.html2text(day1))
    f = open(directory + "/day1.md", "a")
    f.write(day1_md)
    f.close()

    day2_md = '''---
lecture: 2
title: {}
file: {}
date:
---

{}'''.format(day2_title, day2_slides, html2text.html2text(day2))
    f = open(directory + "/day2.md", "a")
    f.write(day2_md)
    f.close()

    day3_md = '''---
lecture: 3
title: {}
file: {}
date:
---

{}'''.format(day3_title, day3_slides, html2text.html2text(day3))
    f = open(directory + "/day3.md", "a")
    f.write(day3_md)
    f.close()

    day4_md = '''---
lecture: 4
title: {}
file: {}
date:
---

{}'''.format(day4_title, day4_slides, html2text.html2text(day4))
    f = open(directory + "/day4.md", "a")
    f.write(day4_md)
    f.close()

    day5_md = '''---
lecture: 5
title: {}
file: {}
date:
---

{}'''.format(day5_title, day5_slides, html2text.html2text(day5))
    f = open(directory + "/day5.md", "a")
    f.write(day5_md)
    f.close()

####
    title="Neighborhood Semantics for Modal Logic"

    times='9:00am - 10:30am'
    short_title='nbhd'
    year=2014
    nasslli = False
    non_esslli_nasslli_school = False
    school_url="http://esslli2014.info/"
    date='August 11 - 16, 2014'
    room=''
    loc="T&uuml;bingen, Germany"
    coteacher_name = ''
    desc='''Neighborhood models are generalizations of the standard relational models for modal logic
    invented independently by Dana Scott and Richard Montague in 1970.  Neighborhood models provide simple
    semantics   for the family of classical modal logics, including many interesting non-normal modalities
    from Concurrent Propositional Dynamic Logic to Coalitional Logic to weak systems of beliefs
    used in various branches of game theory.      A general  criticism of neighborhood models
    is that they are not well-motivated.  They do provide a semantics for weak systems of modal logic,
    but do they do so in a principled way?  There is certainly some truth to this criticism.
    Nonetheless, recent work has demonstrated the usefulness and interest of neighborhood semantics.
    Neighborhood structures naturally show up when studying cooperative and non-cooperative game theory.
    Furthermore, neighborhood semantics can be given an epistemic interpretation as the  evidence
    that an agent has accepted at a given state.     Finally, one can learn something about normal
    systems of modal logic by looking at how these systems behave in  a more general semantics.
    In this course, I will introduced  the basic techniques and results of neighborhood semantics
    for modal logic  and explain the exact relationship between the standard relational semantics
    and neighborhood semantics for modal logics.  The main objective is to demonstrate precisely
    where neighborhood models fit within the large family of semantic frameworks for modal logic and
    discuss both the pitfalls and potential uses of these very general structures.'''

    day1_slides='nbhd-day1.pdf'

    day1_title='Introduction and Motivation I'
    day1='<b>Topics</b>: Introduce both relational and neighborhood semantics for modal logic; ' \
         'Discuss key motivating for studying  non-normal modal logics: Logics of ability, Logics ' \
         'for group decision making, Logic of classical deductive closure, Deontic logic paradoxes, ' \
         'the problem of logical omniscience and knowledge closure; Normal and non-normal modal logics' \
         + '\n\n<br><br>\n\n' + \
         '<b>Reading material</b>: <a href="http://web.pacuit.org/files/neighborhoods/nbhd-v6-PENULTIMATE.pdf">Chapter 1 (Introduction and Motivation)</a>'

    day2_slides ='nbhd-day2.pdf'

    day2_title='Introduction and Motivation II'
    day2='<b>Topics</b>: Neighborhood frames/models; Examples of logics using neighborhood ' \
         'structures: A logic of knowledge, evidence and belief, Coalitional Logic, ' \
         'Subset Space Logic (Topologic);  Neighborhood semantics in the broader logical ' \
         'landscape: relationship with relational structures, topological models, n-ary relational ' \
         'models\n\n<br><br>\n\n <b>Reading material</b>:' \
         ' <a href="http://web.pacuit.org/files/neighborhoods/nbhd-v6-PENULTIMATE.pdf">Chapter 1 (Introduction and Motivation)</a> ' \
         'and Chapter 2 (Core Theory) '

    day3_slides='nbhd-day3.pdf'

    day3_title = 'Core Theory I'
    day3 = '<b>Topics</b>: Relationship with plausibility structures; Completeness and incompleteness ' \
           'of non-normal modal logics \n\n<br><br>\n\n <b>Reading material</b>:  ' \
           '<a href="http://web.pacuit.org/files/nbhd-v3-ch2.pdf">Chapter 2 (Core Theory)</a>'



    day4_slides = 'nbhd-day4.pdf'
    day4_title = 'Core Theory II'
    day4 = '<b>Topics</b>: Decidability, Complexity, Definability, Model Theory ' \
           '(bisimulations, relationship with first-order logic)\n\n<br><br><b>Reading ' \
           'Material</b>\n\n<br><ul>\n<li> H. Hvid Hansen, C. Kupke and E. Pacuit, ' \
           '<a href="http://arxiv.org/pdf/0901.4430v4.pdf">Neighbourhood Structures: Bisimilarity and Basic Model Theory</a></li>\n<li> H. Hvid Hansen, <a href="http://www.cs.ru.nl/~helle/papers/scriptie_pic.pdf" target="_blank">Monotonic modal logics</a></li>\n\n</ul>'


    day5_slides='nbhd-day5.pdf'
    day5_title = 'Core Theory II'
    day5 = '<b>Topics</b>: First-order modal logic on neighborhood structures, Game Logic,' \
           ' Dynamics on neighborhood structures\n\n<br><br>\n\n<b>Reading Material</b>\n\n<ul>\n' \
           '<li>H. Arlo-Costa and E. Pacuit, <a href="http://web.pacuit.org/files/ap-nbhfol-sl2006.pdf">' \
           'First-Order Classical Modal Logic</a>,Studia Logica, 84(2), pgs. 171 - 210, 2006</li>\n' \
           '<li>R. Parikh, <a href="http://www.ai.rug.nl/~sujata/papers/parikh.pdf">Game Logic and its Applications</a>, 1985</li>\n<li> J. van Benthem and E. Pacuit, <a href="http://web.pacuit.org/files/nbhd-ev-sl-v8.pdf">Dynamic Logics of Evidence Based Beliefs</a>, Studia Logica, 99, pgs. 61 - 92, 2011</li>\n\n</ul>'


    directory = str(year) + "/"  + short_title 
    if not os.path.exists(str(year)):
        os.mkdir(str(year))
    os.mkdir(directory)

    if coteacher_name != '':
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
  - name:  {}
    web: {}
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    else: 
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    print index_md


    print index_md

    f = open(directory + "/index.md", "a")
    f.write(index_md)
    f.close()

    day1_md = '''---
lecture: 1
title: {}
file: {}
date:
---

{}'''.format(day1_title, day1_slides, html2text.html2text(day1))
    f = open(directory + "/day1.md", "a")
    f.write(day1_md)
    f.close()

    day2_md = '''---
lecture: 2
title: {}
file: {}
date:
---

{}'''.format(day2_title, day2_slides, html2text.html2text(day2))
    f = open(directory + "/day2.md", "a")
    f.write(day2_md)
    f.close()

    day3_md = '''---
lecture: 3
title: {}
file: {}
date:
---

{}'''.format(day3_title, day3_slides, html2text.html2text(day3))
    f = open(directory + "/day3.md", "a")
    f.write(day3_md)
    f.close()

    day4_md = '''---
lecture: 4
title: {}
file: {}
date:
---

{}'''.format(day4_title, day4_slides, html2text.html2text(day4))
    f = open(directory + "/day4.md", "a")
    f.write(day4_md)
    f.close()

    day5_md = '''---
lecture: 5
title: {}
file: {}
date:
---

{}'''.format(day5_title, day5_slides, html2text.html2text(day5))
    f = open(directory + "/day5.md", "a")
    f.write(day5_md)
    f.close()

######


    title="Reasoning in Games"

    times='9am - 10:30am'
    short_title='reasgames'
    year=2015
    nasslli = False
    non_esslli_nasslli_school = False
    school_url="http://www.esslli2015.org/"
    date='August 5 - 10, 2015'
    room='52.015'
    loc="Universitat Pompeu Fabra, Barcelona, Spain"
    coteacher_name = ''

    desc='''This course is a general introduction to game theory with a special focus on the growing body of literature on epistemic game theory. Epistemic game theory aims at formalizing assumptions about knowledge, belief and rationality, and then studies their behavioral implications in games. One standard assumption is that there is common belief of rationality among all the relevant players. A second, related, assumption is adeptly summarized by Robert Aumann and Jacques Dreze in a recent article (Rational Expectations in Games, <em>American Economic Review</em>, 98 (2008), pp. 72-86): "the fundamental insight of game theory [is] that a rational player must take into account that the players reason about each other in deciding how to play". Exactly how the players (should) incorporate the fact that they are interacting with other (actively reasoning) agents into their own decision making process is the subject of much debate. The course will focus on formal models of strategic reasoning in game-theoretic situations.<br /><br />

Some previous exposure to game and decision theory will be helpful, but is not required (I will do my best to provide the necessary background in game and decision theory. This will include a tutorial on the basic concepts of game and decision theory during the first lecture and additional lectures on background material as needed during the course). This is an interdisciplinary topic, and so our readings will be taken from economics, logic, philosophy and cognitive science journals. <br /> <br />


An overview of many of the topics discussed in this course can be found here: <br /><br />

Eric Pacuit and Olivier Roy,  <a href="http://plato.stanford.edu/entries/epistemic-game/" target="_blank">Epistemic Foundations of Game Theory</a>, The Stanford Encyclopedia of Philosophy (Spring 2015 Edition), Edward N. Zalta (ed.).
'''

    day1_slides='reas-games-lec1.pdf'

    day1_title='Decision Theory'
    day1='''I introduced the basics of decision theory: Decision problems, strict/weak dominance, expected utility, minmax regret, ordinal/cardinal utilities.   We discussed the von Neumann-Morgenstern Theorem and Newcomb's paradox. We concluded with a brief discussion of ratifiability (focusing on the Death in Damascus problem).

<br /><br />

<b> Background Reading </b><br />

<ul>


<li>Rachel Briggs,  <a href="http://plato.stanford.edu/entries/rationality-normative-utility/" target="_blank"> Normative Theories of Rational Choice</a>, The Stanford Encyclopedia of Philosophy (Fall 2014 Edition), Edward N. Zalta (ed.) </li>


<li> Kaushik Basu,  <a href="http://www.cs.virginia.edu/~robins/The_Travelers_Dilemma.pdf" target="_blank">The Traveler's</a>, Scientific American, pg. 90 - 95, 2007.</li>
</ul>
'''
    day2_slides ='reas-games-lec2.pdf'

    day2_title='From Decisions to Games'
    day2='''This lecture introduced the basic concepts of game theory (e.g., strategic and extensive games, Nash equilibrium, iterated strict/weak dominance, rationalizability). <br />
<br />
<b> Background Reading</b>
<ul>

<li>K.R. Apt (2011). <a href="http://arxiv.org/abs/1102.0203" target="_blank">A Primer on Strategic Games</a>, in Lectures in Game Theory for Computer Scientists, Cambridge University Press, pgs. 1 - 33.</li>


<li><a href="http://www.game-theory-class.org/" target="_blank">Online game theory course</a> by Kevin Leyton-Brown, Matthew Jackson and Yoav Shoham (the website contains a link to a youtube channel containing the video lectures from the course).  </li>
'''

    day3_slides='reas-games-lec3.pdf'

    day3_title = 'Game Models'
    day3 = '''The lecture introduced epistemic models of games.  We discussed epistemic characterizations of Nash equilibrium, correlated equilibrium, iterated strict/weak dominance.    <br />
<br />
<b> Background Reading</b>
<ul>

<li>EP and O. Roy, <a href="http://plato.stanford.edu/entries/epistemic-game/" target="_blank">Epistemic Foundations of Game Theory</a>, Stanford Encyclopedia of Philosophy, 2015</li>


<li>A. Perea, Epistemic Game Theory: Reasoning and Choice,  Cambridge University Press, 2012 </li>

</ul>'''


    day4_slides = 'reas-games-lec4.pdf'
    day4_title = 'Deliberation (in Games)'
    day4 = '''This lecture introduced Brian Skyrms' model of deliberation in games.   We discussed a number of extensions of the model.   We also briefly discussed how to incorporate belief revision in game models.  <br />
<br />
<b> Background Reading</b>
<ul>

<li>EP,  <a href="http://web.pacuit.org/files/stratreas-survey.pdf">Dynamic Models of Reasoning in Games</a>, forthcoming, 2015</li>



</ul>
'''

    day5_slides='reas-games-lec5.pdf'
    day5_title = 'Backward and Forward Induction, Concluding Remarks'
    day5 = '''The main part of the lecture focused on epistemic issues that arise when characterizing forward and backward induction on extensive games.   I ended with a few concluding remarks.

<br>
<br />

<b> Backward Induction</b>
<ul>
<li> R. Stalnaker, <a href="http://www.sciencedirect.com/science/article/pii/S0165489698000079" target="_blank"> Belief Revision in Games: Backward and Forward Induction</a>, Mathematical Social Sciences, 36:1, pgs. 31 - 56, 1998</li>

<li>A. Knoks and E. Pacuit, <!--<a href="http://web.pacuit.org/files/" >-->Deliberating between Backward and Forward Induction: First Steps, TARK 2015</li>
</ul>'''


    directory = str(year) + "/"  + short_title 
    if not os.path.exists(str(year)):
        os.mkdir(str(year))
    os.mkdir(directory)

    if coteacher_name != '':
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
  - name:  {}
    web: {}
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    else: 
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    print index_md


    print index_md

    f = open(directory + "/index.md", "a")
    f.write(index_md)
    f.close()

    day1_md = '''---
lecture: 1
title: {}
file: {}
date:
---

{}'''.format(day1_title, day1_slides, html2text.html2text(day1))
    f = open(directory + "/day1.md", "a")
    f.write(day1_md)
    f.close()

    day2_md = '''---
lecture: 2
title: {}
file: {}
date:
---

{}'''.format(day2_title, day2_slides, html2text.html2text(day2))
    f = open(directory + "/day2.md", "a")
    f.write(day2_md)
    f.close()

    day3_md = '''---
lecture: 3
title: {}
file: {}
date:
---

{}'''.format(day3_title, day3_slides, html2text.html2text(day3))
    f = open(directory + "/day3.md", "a")
    f.write(day3_md)
    f.close()

    day4_md = '''---
lecture: 4
title: {}
file: {}
date:
---

{}'''.format(day4_title, day4_slides, html2text.html2text(day4))
    f = open(directory + "/day4.md", "a")
    f.write(day4_md)
    f.close()

    day5_md = '''---
lecture: 5
title: {}
file: {}
date:
---

{}'''.format(day5_title, day5_slides, html2text.html2text(day5))
    f = open(directory + "/day5.md", "a")
    f.write(day5_md)
    f.close()

####


    title="Social Choice Theory for Logicians"

    times='14:00 - 15:30'
    short_title='socchthy_log'
    year=2016
    nasslli = False
    non_esslli_nasslli_school = False
    school_url="http://esslli2016.unibz.it/"
    date='August 15 - 20, 2016'
    room='C2.01'
    loc="University of Bozen-Bolzano, Italy"
    coteacher_name = ''

    desc='''Social Choice Theory is the formal analysis of collective decision making.
    A growing number of logical systems incorporate insights and ideas from this important field.
    This course will introduce the key results (including proofs) and the main research themes
    of Social Choice Theory. The primary objective is to introduce the main mathematical methods and
    conceptual ideas found in the Social Choice literature. I will also pay special attention to recent
    logical systems that have been developed to reason about group decision making and how social
    choice-style analyses are being used by logicians.
Specific topics include:

<ul>
<li>  Proofs of key Social
Choice results (e.g., Arrow's Impossibility Theorem, Sen's Impossibility of the Paretian Liberal, M&uuml;ller-Satterthwaite Theroem, Harsanyi's Utilitarian Theorem, and
the Gibbard-Satterthwaite Theorem)</li>

<li> Responses to Arrow's Theorem (e.g., Domain Restrictions, such as Sen's Value Restriction and Black's Single-Peakedness Condition)</li>
<li> Axiomatic characterizations of voting procedures (May's Characterization of the majority rule, Maskin's Characterization of majority rule, Fishburn's
Characterization of Approval Voting, Young's Characterization of positional voting, Saari's
characterization of Borda Count)</li>

<li>  Voting paradoxes (e.g., Condorcet's paradox, Anscombe's Paradox, the No-Show Paradox) </li>

<li> Generalizations of the classic framework (e.g., assuming there are infinitely many voters)</li>

<li> Judgement aggregation (e.g., Dietrich-List impossibility theorem)</li>

<li> The Condorcet Jury Theorem and its many variants</li>

<li>  Logics for reasoning about
preference aggregation (modal logics for preference aggregation, dependence and independence logic for social choice theory). </li>
</ul>
The course will not only provide a broad overview of the field of Social Choice from a logicians perspective, but will also discuss key technical results of particular interest to logicians. The main goal is to provide a solid foundation for students that want to incorporate
results and ideas from Social Choice Theory into their field of study.  I will also explore the to what extent modal and preference logics can faithfully formalize key results in social choice theory.

'''

    day1_slides='lec1-intro.pdf'

    day1_title='Introduction and Background'
    day1='''<a href="http://pacuit.org/tutorials/voting-methods/#" target="_blank"> Voting Methods Tutorial</a><br/>
<br/>
<a href="http://plato.stanford.edu/entries/voting-methods/">Voting Methods</a>, Stanford Encyclopedia of Philosophy, E. Pacuit
'''
    day2_slides ='lec2-social-choice-theory.pdf'

    day2_title='Arrow\'s Theorem and Social Choice Theory'
    day2='''<a href="http://plato.stanford.edu/entries/arrows-theorem/">Arrow's Theorem</a>, Stanford Encyclopedia of Philosophy, M. Morreau

<br/>
<br/>
<a href="https://www.youtube.com/watch?v=BldRtik-r-o"> Video: Arrow's Theorem<br/>
<br/>
<a href="https://www.youtube.com/watch?v=LVkioI5Z0JE"> Video: Proof of  Arrow's Theorem</a>
<br/><br/>

<a href="http://web.pacuit.org/files/notes-arrow.pdf" target="_blank">Proof of Arrow's  Theorem</a>
'''

    day3_slides='lec3-social-choice-theory2.pdf'

    day3_title = 'Social Choice Theory'
    day3 = '''<a href="http://plato.stanford.edu/entries/social-choice/" target="_blank">Social Choice Theory</a>, Stanford Encyclopedia of Philosophy, C. List

<br />
<br />
<a href="http://web.pacuit.org/files/harsanyi-theorem.pdf" target="_blank">Proof of Harsanyi's Theorem</a>
'''


    day4_slides = 'lec4-strat-jag-woc.pdf'
    day4_title = 'Strategizing and Judgement Aggregation'
    day4 = '''<a href="http://plato.stanford.edu/entries/social-choice/" target="_blank">Social Choice Theory</a>, Stanford Encyclopedia of Philosophy, C. List
'''

    day5_slides='lec5-soc-choice-logic.pdf'
    day5_title = 'Logic and Social Choice'
    day5 = ''' <a href="https://staff.fnwi.uva.nl/u.endriss/pubs/files/CinaEndrissJAAMAS.pdf" target="_blank">Cina and Endriss paper (modal logic and social choice)</a>

<br/>
<br/>
<a href="http://web.pacuit.org/files/depind-sch_final.pdf" target="_blank">Pacuit and Yang paper (dependence logic and social choice)</a>
'''


    directory = str(year) + "/"  + short_title 
    if not os.path.exists(str(year)):
        os.mkdir(str(year))
    os.mkdir(directory)

    if coteacher_name != '':
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
  - name:  {}
    web: {}
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    else: 
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    print index_md


    print index_md

    f = open(directory + "/index.md", "a")
    f.write(index_md)
    f.close()

    day1_md = '''---
lecture: 1
title: {}
file: {}
date:
---

{}'''.format(day1_title, day1_slides, html2text.html2text(day1))
    f = open(directory + "/day1.md", "a")
    f.write(day1_md)
    f.close()

    day2_md = '''---
lecture: 2
title: {}
file: {}
date:
---

{}'''.format(day2_title, day2_slides, html2text.html2text(day2))
    f = open(directory + "/day2.md", "a")
    f.write(day2_md)
    f.close()

    day3_md = '''---
lecture: 3
title: {}
file: {}
date:
---

{}'''.format(day3_title, day3_slides, html2text.html2text(day3))
    f = open(directory + "/day3.md", "a")
    f.write(day3_md)
    f.close()

    day4_md = '''---
lecture: 4
title: {}
file: {}
date:
---

{}'''.format(day4_title, day4_slides, html2text.html2text(day4))
    f = open(directory + "/day4.md", "a")
    f.write(day4_md)
    f.close()

    day5_md = '''---
lecture: 5
title: {}
file: {}
date:
---

{}'''.format(day5_title, day5_slides, html2text.html2text(day5))
    f = open(directory + "/day5.md", "a")
    f.write(day5_md)
    f.close()


####
    title="Logical and Probabilistic Models of Belief Change"

    times='5:15pm - 6:45pm'
    short_title='belrev'
    year=2016
    nasslli = True
    non_esslli_nasslli_school = False
    school_url="http://nasslli2016.rutgers.edu/"
    date='July 11- 16, 2016'
    room='<a href="http://search.rutgers.edu/buildings.html?q=honors%20college">Honors S126</a>'
    loc="Rutgers University"
    coteacher_name = ''

    desc='''Reasoning about the knowledge and beliefs of a single agent or group of agents  is an interdisciplinary concern spanning  computer science, game theory,  philosophy, linguistics and statistics.   Inspired, in part, by issues in  these different  "application" areas, many different notions of knowledge and belief have been identified and analyzed in the formal epistemology literature.        The  main challenge   is not to argue that one particular account  of belief or knowledge is <em> primary</em>,  but, rather,  to explore the logical space of definitions and identify interesting relationships between the different notions.   A second challenge (especially for students) is to keep track of the many different formal frameworks used in this broad literature   (typical examples include modal logics of knowledge and belief,  the theory of subjective probability, but there are many variants, such as the Dempster-Shafer belief functions and conditional probability systems).  This foundational course will introduce students to  key methodological, conceptual and technical issues that arise when designing a formalism to make precise intuitions about the   beliefs of a group of agents, and how these beliefs may change over time.   There are two central questions that I will address is this course: 1. What is the precise relationship between the different formalisms describing an agent's beliefs (e.g.,  what is the relationship between an agent's graded beliefs and full beliefs?); and     2. How should  a agent change her beliefs in response to new evidence?
'''

    day1_slides='NASSLLI2016-belrev-lec1.pdf'

    day1_title='Formal models of belief (revision)'
    day1='''<b>Reading</b><br /><br/>
<ul>
<li> P. Gardenfors, <a href="https://myelms.umd.edu/courses/1181012/files/42181426/download?download_frd=1">Introduction to Belief Revision</a>
<li>F. Huber, <a href="http://plato.stanford.edu/entries/formal-belief/">Formal Representations of Belief</a>, Stanford Encyclopedia of Philosophy</li>

<li>A. Baltag and B. Renne, <a href="http://plato.stanford.edu/entries/dynamic-epistemic/">Dynamic Epistemic Logic</a>, Stanford Encyclopedia of Philosophy</li>


</ul>'''
    day2_slides ='Currently: courses/esslli/NASSLLI2016-belrev-lec2.pdf'

    day2_title='Bayesian models, updating probabilities'
    day2='''<b>Reading</b><br /><br/>
<ul>
<li>J. Weisberg, <a href="http://www.utm.utoronto.ca/~weisber3/articles/VarietiesvF.pdf"> Varieties of Bayesianism</a></li>

</ul>'''

    day3_slides='NASSLLI2016-belrev-lec3.pdf'

    day3_title = 'Updating probabilities'
    day3 = ''' '''


    day4_slides = 'NASSLLI2016-belrev-lec4'
    day4_title = 'Meta-information, Iterated revision'
    day4 = ''' '''

    day5_slides='NASSLLI2016-belrev-lec5.pdf'
    day5_title = 'Iterated Belief Revision and Agreement Theorems'
    day5 = ''' '''


    directory = str(year) + "/"  + short_title 
    if not os.path.exists(str(year)):
        os.mkdir(str(year))
    os.mkdir(directory)

    if coteacher_name != '':
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
  - name:  {}
    web: {}
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    else: 
        index_md = '''---
title: {}
venue: {}
dates: {}
time: {}
location:
school: {}
school_www: {}
coteacher:
---
{}
'''.format(title, loc, date, times, "ESSLLI " + str(year), school_url, coteacher_name, co_teacher_web, html2text.html2text(desc))
    print index_md


    print index_md

    f = open(directory + "/index.md", "a")
    f.write(index_md)
    f.close()

    day1_md = '''---
lecture: 1
title: {}
file: {}
date:
---

{}'''.format(day1_title, day1_slides, html2text.html2text(day1))
    f = open(directory + "/day1.md", "a")
    f.write(day1_md)
    f.close()

    day2_md = '''---
lecture: 2
title: {}
file: {}
date:
---

{}'''.format(day2_title, day2_slides, html2text.html2text(day2))
    f = open(directory + "/day2.md", "a")
    f.write(day2_md)
    f.close()

    day3_md = '''---
lecture: 3
title: {}
file: {}
date:
---

{}'''.format(day3_title, day3_slides, html2text.html2text(day3))
    f = open(directory + "/day3.md", "a")
    f.write(day3_md)
    f.close()

    day4_md = '''---
lecture: 4
title: {}
file: {}
date:
---

{}'''.format(day4_title, day4_slides, html2text.html2text(day4))
    f = open(directory + "/day4.md", "a")
    f.write(day4_md)
    f.close()

    day5_md = '''---
lecture: 5
title: {}
file: {}
date:
---

{}'''.format(day5_title, day5_slides, html2text.html2text(day5))
    f = open(directory + "/day5.md", "a")
    f.write(day5_md)
    f.close()


esslli_courses()
print "hello"