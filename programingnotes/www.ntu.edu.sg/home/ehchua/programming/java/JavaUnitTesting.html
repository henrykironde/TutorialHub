<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Java Unit Testing with JUnit and TestNG</title>

<!-- @@ start change in v1 -->
<link href="../css/programming_notes_v1.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="../scripts/programming_notes_v1.js"></script>
<link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
</head>

<body>

<div id="wrap-outer">

<!-- header filled by JavaScript -->
<div id="header" class="header-footer"><p>&nbsp;</p></div>

<div id="wrap-inner">

<div id="wrap-toc">
<h5>TABLE OF CONTENTS <a id="show-toc" href="#show-toc">(HIDE)</a></h5>
<div id="toc"></div>  <!-- for showing the "Table of Content" -->
</div>

<div id="content-header">
<h1>Java Unit Testing - JUnit &amp; TestNG</h1>
</div>

<div id="content-main">

<!-- @@ end change in v1 -->

<h3>Introduction to Unit Testing Framework</h3>

<p>The various type of software testings include:</p>
<ul>
<li><strong>Unit Test</strong>: Test individual component/class in isolation.</li>
<li><strong>Integration Test</strong>: Test a group of associated components/classes.</li>
<li><strong>Acceptance Test (or Functional Test)</strong>: operate on a fully integrated system, testing against the user interface (e.g., HTML for browser or XML/JSON for web services).</li>
<li><strong>Regression Test</strong>: Tests to ensure the a change (such as enhancement, patches or configuration change) does not break the system or introduce new faults.</li>
</ul>

<p><em>Unit Testing</em> is concerned about testing <em>individual</em> programs/classes to ascertain that each program/class runs as per specification. Prior to the arrival of &quot;unit testing framework&quot;, programmers tends to write test expressions which print to the console or a trace file (the amount of output is sometimes controlled by a trace-level or debug-level flag). This approach is not satisfactory because it requires human judgment to analyze the results produced. Too many print statements cause the dreaded <em>Scroll Blindness</em>.</p>

<p>JDK 1.4 provides an assertion feature (read <a href="J5a_ExceptionAssert.html#assertion">Assertion</a>), which enables you to <em>test</em> (or <em>assert</em>) your assumptions about your program logic (such as pre-conditions, post-conditions, and invariants). Nonetheless, assertion is <em>primitive</em> compared with the unit testing framework.</p>

<p>With a proper Unit Testing framework, you can automate the entire unit testing process. Your job becomes designing proper test cases to excite the program. Furthermore, the unit testing process can be integrated into the build process. In this case, the build process not only checks for syntax errors, but semantic errors as well.</p>

<h4>Extreme Programming</h4>

<p>Extreme programming (@ <a href="www.xprogramming.com">www.xprogramming.com</a>) advocates &quot;write test first, before writing codes&quot;.</p>

<h4>xUnit Unit Testing Framework</h4>

<p>xUnit is the family name given to a group of unit testing frameworks that share the same architecture, such as JUnit (for Java), NUnit (for .NET), CppUnit (for C++), PHPUnit (for PHP) and many others.</p>

<p>The xUnit architecture has these common components:</p>

<ul>
<li>Test case / Test suites:</li>
<li>Test fixture:</li>
<li>Test runner:</li>
<li>Test result formatter:</li>
<li>Assertions:</li>
</ul>


<h3>JUnit</h3>

<p>JUnit (@ <a href="http://junit.org/">http://junit.org/</a>) is an open-source Java <em>Unit Testing Framework</em> designed by Kent Beck, Erich Gamma.  It is the <em>de facto</em> standard for Java Unit Testing. JUnit is not included in JDK, but included in most of the IDEs such as Eclipse and NetBeans.</p>

<h4>Installing and Using JUnit</h4>

<p><span class="line-heading">Installing JUnit: </span>Goto <a href="http://junit.org/">http://junit.org/</a> &rArr; &quot;Download and Install Guide&quot; &rArr; Download the &quot;<code>junit.jar</code>&quot; and &quot;<code>hamcrest-core.jar</code>&quot;. You could download the API documentation as well as the source code.</p>

<p><span class="line-heading">Using JUnit: </span>To use the JUnit, include JUnit jar-files &quot;<code>junit-4.##.jar</code>&quot; and &quot;<code>hamcrest-core-1.##.jar</code>&quot; in your <code>CLASSPATH</code>.</p>

<h4>Using JUnit under Eclipse</h4>

<p><span class="line-heading">Include JUnit Library in your Java Project</span>: Create a new Java project &rArr; right-click on the project &rArr; Properties &rArr; Java Build Path &rArr; &quot;Libraries&quot; tab &rArr; Add Library &rArr; JUnit &rArr; In &quot;JUnit library version&quot;, choose &quot;JUnit 4&quot; &rArr; In &quot;current location&quot; use the eclipse's JUnit or your own download. [Alternatively, when you create a new test case or test suite (as describe below), Eclipse will prompt you to include the JUnit library.]</p>

<p><span class="line-heading">Create Test case (or Test Suite)</span>: To create a new JUnit test case (or test suite, which contains many test cases) &rArr; File &rArr; Others &rArr; Java &rArr; JUnit &rArr; JUnit test case (or JUnit test suite).</p>

<p><span class="line-heading">Run Test case (or Test Suite)</span>: To run a test case (or test suite), right-click the file &rArr; Run As &rArr; JUnit Test.</p>

<h3>JUnit 4</h3>
<p>There are two versions of JUnit, version 3 and version 4, which are radically different. JUnit 4 uses the <em>annotation</em> feature (since JDK 1.5) to streamline the process and drop the strict naming conventions of test methods.</p>

<h4>Getting Started with an Example</h4>

<p>Suppose that we wish to carry out unit testing on the following Java program, which uses <code>static</code> methods to perform arithmetic operations on two integers. Take note that divide throws an <code>IllegalArgumentException</code> for divisor of zero.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33</pre>
</td>
<td>
<pre>
<span class="color-comment">/**
 * The Calculator class provides static methods for
 *  arithmetic operations on two integers.
 */</span>
public class Calculator {
   public static int add(int number1, int number2) {
      return number1 + number2;
   }
 
   public static int sub(int number1, int number2) {
      return number1 - number2;
   }
 
   public static int mul(int number1, int number2) {
      return number1 * number2;
   }
 
  <span class="color-comment"> // Integer divide. Return a truncated int.</span>
   public static int divInt(int number1, int number2) {
      if (number2 == 0) {
         throw new IllegalArgumentException(&quot;Cannot divide by 0!&quot;);
      }
      return number1 / number2;
   }
 
  <span class="color-comment"> // Real number divide. Return a double.</span>
   public static double divReal(int number1, int number2) {
      if (number2 == 0) {
         throw new IllegalArgumentException(&quot;Cannot divide by 0!&quot;);
      }
      return (double) number1 / number2;
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<h5>First Test Case</h5>

<p>Let's do it under Eclipse.</p>

<ol>
<li>Create a new Eclipse Java project called &quot;<code>JUnitTest</code>&quot;.</li>
<li>Create a new class called &quot;<code>Calculator</code>&quot; under &quot;<code>src</code>&quot; folder, with the above program code.</li>
<li>Create a new folder called &quot;<code>test</code>&quot; for storing test scripts &rArr; Right-click on the project &rArr; New &rArr; Folder &rArr; In folder name, enter &quot;<code>test</code>&quot;. Make &quot;<code>test</code>&quot; a source folder by right-click on &quot;<code>test</code>&quot; &rArr; Build Path &rArr; Use as source folder.</li>
<li>Create the first test case called &quot;<code>AddSubTest</code>&quot; &rArr; Right-click on folder &quot;<code>test</code>&quot; &rArr; New &rArr; Other &rArr; Java &rArr; JUnit &rArr; JUnit Test Case &rArr; New JUnit 4 test &rArr; In Name, enter &quot;<code>AddSubTest</code>&quot;. Enter the following codes:

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30</pre>
</td>
<td>
<pre>
import static org.junit.Assert.*;
import org.junit.Test;
 
public class AddSubTest {
   @Test
   public void testAddPass() {
     <span class="color-comment"> // assertEquals(String message, long expected, long actual)</span>
      assertEquals(&quot;error in add()&quot;,  3, Calculator.add(1, 2));
      assertEquals(&quot;error in add()&quot;, -3, Calculator.add(-1, -2));
      assertEquals(&quot;error in add()&quot;,  9, Calculator.add(9, 0));
   }
 
   @Test
   public void testAddFail() {
     <span class="color-comment"> // assertNotEquals(String message, long expected, long actual)</span>
      assertNotEquals(&quot;error in add()&quot;, 0, Calculator.add(1, 2));
   }
 
   @Test
   public void testSubPass() {
      assertEquals(&quot;error in sub()&quot;,  1, Calculator.sub(2, 1));
      assertEquals(&quot;error in sub()&quot;, -1, Calculator.sub(-2, -1));
      assertEquals(&quot;error in sub()&quot;,  0, Calculator.sub(2, 2));
   }
 
   @Test
   public void testSubFail() {
      assertNotEquals(&quot;error in sub()&quot;, 0, Calculator.sub(2, 1));
   }
}</pre>
</td>
</tr>
</tbody>
</table>

</li>

<li>To run the test case, right-click on the file &rArr; Run as &rArr; JUnit Test. The test result is shown in the JUnit panel. 4 tests were run and all succeeded. Study the test results.</li>

<li>Try modify one of the test to force a test failure and observe the test result, e.g.,
<pre class="color-example">
@Test
public void testAddPass() {
   assertEquals("error in add()",  0, Calculator.add(1, 2));
   .....
}</pre></li>

</ol>

<h5>Explanation</h5>

<ul>
<li>A test case contains a number of tests, marked with annotation of &quot;<code>@org.junit.Test</code>&quot;. Each of the test is run independently from the other tests.</li>

<li>Inside the test method, we can use static methods <code>assertXxx()</code> (in class <code>org.unit.Assert</code>) to assert the expected and actual test outcomes, such as:

<pre class="color-command">
public static void assertEquals([String message,] long expected, long actual)  
      <span class="color-comment">// int and long: expected == actual</span>
public static void assertEquals([String message,] double expected, double actual, double epsilon)
      <span class="color-comment">// double: expect == actual within tolerance of epsilon</span>
public static void assertEquals([String message,] Object expected, Object actual)
      <span class="color-comment">// Object: expected.equals(actual)</span>
public static void assertNotEquals(.....)

public static void assertSame([String message,] Object expected, Object actual)
      <span class="color-comment">// Same Object: expected == actual</span>
public static void assertNotSame(.....)

public static void assertTrue([String message,] boolean condition)
      <span class="color-comment">// boolean: condition == true</span>
public static void assertFalse([String message,] boolean condition)
      <span class="color-comment">// boolean: condition == false</span>

public static void assertNull([String message,] Object object)
      <span class="color-comment">// object == null</span>
public static void assertNotNull(......)

public static void assertArrayEquals([String message,], int[] expecteds, int[] actuals)
public static void assertArrayEquals([String message,], byte[] expecteds, byte[] actuals)
public static void assertArrayEquals([String message,], char[] expecteds, char[] actuals)
public static void assertArrayEquals([String message,], long[] expecteds, long[] actuals)
public static void assertArrayEquals([String message,], byte[] expecteds, byte[] actuals)
public static void assertArrayEquals([String message,], short[] expecteds, short[] actuals)
public static void assertArrayEquals([String message,], Object[] expecteds, Object[] actuals)

public static &lt;T&gt; void assertThat([String message,], T actual, org.hamcrest.Matcher&lt;T&gt; matcher)
</pre></li>

</ul>

<h5>Run Test Standalone via Test Runner</h5>

<p>To run your test standalone (outside Eclipse), you could write a Test Runner as follows:</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13</pre>
</td>
<td>
<pre>
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
 
public class RunTestStandalone {
   public static void main(String[] args) {
      Result result = JUnitCore.runClasses(AddSubTest.class);
      for (Failure failure : result.getFailures()) {
         System.out.println(failure.toString());
      }
      System.out.println(result.wasSuccessful());
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>You can include more than one test cases using <code>runClasses(test1.class, test2.class, ...)</code>.</p>

<h5>Run Test in Command-line</h5>

<p>JUnit also provides a console version of test-runner called org.junit.runner.JUnitCore for you to run the tests in command-line, with the following syntax:</p>

<pre class="color-command">
<span class="color-comment">// Need to include JUnit's jar-file in CLASSPATH.</span>
$ java org.junit.runner.JUnitCore TestClass1 [TestClass2 ...]</pre>

<ol>
<li>Copy all your classes into one folder (for simplicity).</li>

<li>Set the <code>CLASSPATH</code> to include the JUnit jar-files:
<pre class="color-command">
<span class="color-comment">// Unix/Linux/Ubuntu/Mac (for this bash session only)</span>
$ export CLASSPATH=.:$CLASSPATH:/path/to/junit/junit-4.11.jar:/path/to/junit/hamcrest-core-1.3.jar

<span class="color-comment">// Windows (for this CMD session only)</span>
&gt; set CLASSPATH=.;%CLASSPATH%;x:\path\to\junit\junit-4.11.jar;x:\path\to\junit\hamcrest-core-1.3.jar
</pre></li>

<li>Compile all the source files:
<pre class="color-command">
$ cd /path/to/source-files
$ javac Calculator.java AddSubTest.java</pre></li>

<li>Run the test:
<pre class="color-command">
$ java org.junit.runner.JUnitCore AddSubTest
JUnit version 4.11
....
Time: 0.006
OK (4 tests)</pre></li>

</ol>

<h5>Second Test Case</h5>

<p>Let's write another test case to test the divide methods, which throw an Exception for divisor of zero. Furthermore, the method <code>divReal()</code> returns a double which cannot be compared with absolute precision.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31</pre>
</td>
<td>
<pre>
import static org.junit.Assert.*;
import org.junit.Test;
 
public class DivTest {
   @Test
   public void testDivIntPass() {
      assertEquals(&quot;error in divInt()&quot;, 3, Calculator.divInt(9, 3));
      assertEquals(&quot;error in divInt()&quot;, 0, Calculator.divInt(1, 9));
   }
 
   @Test
   public void testDivIntFail() {
      assertNotEquals(&quot;error in divInt()&quot;, 1, Calculator.divInt(9, 3));
   }
 
   @Test(expected = IllegalArgumentException.class)
   public void testDivIntByZero() {
      Calculator.divInt(9, 0);<span class="color-comment"> // expect an IllegalArgumentException</span>
   }
 
   @Test
   public void testDivRealPass() {
      assertEquals(&quot;error in divInt()&quot;, 0.333333, Calculator.divReal(1, 3), 1e-6);
      assertEquals(&quot;error in divInt()&quot;, 0.111111, Calculator.divReal(1, 9), 1e-6);
   }
 
   @Test(expected = IllegalArgumentException.class)
   public void testDivRealByZero() {
      Calculator.divReal(9, 0);<span class="color-comment"> // expect an IllegalArgumentException</span>
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>Run the test and observe the test result. Change <code>testDivRealPass()</code>'s expected value from 0.333333 to 0.333330 and check the test result.</p>

<h5>Explanation</h5>

<ul>
<li>To test for exception, use annotation <code>@Test</code> with attribute <code>expected = <em>ExceptionClassName</em></code>.</li>
<li>To compare doubles, use a tolerance (epsilon) as shown.</li>
</ul>

<h5>First Test Suite</h5>
<p>A test suite comprises many test cases.</p>

<p>To create a test suite under Eclipse &rArr; right-click on the <code>test</code> folder &rArr; New &rArr; other &rArr; Java &rArr; JUnit &rArr; JUnit Test Suite &rArr; In Name, enter &quot;<code>AllTests</code>&quot; &rArr; Select test cases to be included -  AddSubTest and DivTest.</p>

<p>The following test script will be created:</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9</pre>
</td>
<td>
<pre>
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
 
@RunWith(Suite.class)
@SuiteClasses({ AddSubTest.class, DivTest.class })
public class AllTests {
 
}</pre>
</td>
</tr>
</tbody>
</table>

<p>Take note that the test suite class is marked by annotation <code>@RunWith</code> and <code>@SuiteClasses</code> with an empty class body.</p>

<p>To run the test suite &rArr; right-click on the file &rArr; Run as &rArr; JUnit Test.  Observe the test results produced.</p>

<p>You can also run the test suite via Test Runner <code>org.junit.runner.JUnitCore</code>, just like running test cases (as described earlier).</p>

<h4>Testing Java Classes By Example</h4>

<p>Instead of testing static methods in a Java class, let's carry out unit test on a proper self-contained and encapsulated Java class with its own private variables and public operations.</p>

<p>Suppose that we have a class called <code>MyNumber</code> that represents a number, and capable of performing arithmetic operations.</p>

<p>Again, we shall work under Eclipse.</p>

<ol>
<li>Create a Java project called &quot;<code>JUnitTest2</code>&quot;</li>

<li>Create a new Java class called &quot;<code>MyNumber</code>&quot;, as follow:

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37</pre>
</td>
<td>
<pre>
<span class="color-comment">/**
 * The class MyNumber represent a number, and capable
 * of performing arithmetic operations.
 */</span>
public class MyNumber {
   int number;
 
  <span class="color-comment"> // Constructor</span>
   public MyNumber() {
      this.number = 0;
   }

   public MyNumber(int number) {
      this.number = number;
   }
 
  <span class="color-comment"> // Getter and setter</span>
   public int getNumber() {
      return number;
   }
 
   public void setNumber(int number) {
      this.number = number;
   }
 
  <span class="color-comment"> // Public methods</span>
   public MyNumber add(MyNumber rhs) {
      this.number += rhs.number;
      return this;
   }
 
   public MyNumber div(MyNumber rhs) {
      if (rhs.number == 0) throw new IllegalArgumentException(&quot;Cannot divide by 0!&quot;);
      this.number /= rhs.number;
      return this;
   }
}</pre>
</td>
</tr>
</tbody>
</table>
</li>

<li>Create a new source folder called &quot;<code>test</code>&quot; for storing test scripts. Make it a source folder by right-click &rArr; Build Path &rArr; Use as source folder.</li>

<li>Create the first test case called MyNumberTest (under &quot;<code>test</code>&quot; folder), as follows:

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49</pre>
</td>
<td>
<pre>
import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
 
public class MyNumberTest {
   private MyNumber number1, number2; <span class="color-comment">// Test fixtures</span>
 
   @Before
   public void setUp() throws Exception {
      System.out.println(&quot;Run @Before&quot;);<span class="color-comment"> // for illustration</span>
      number1 = new MyNumber(11);
      number2 = new MyNumber(22);
   }
 
   @After
   public void tearDown() throws Exception {
      System.out.println(&quot;Run @After&quot;);<span class="color-comment"> // for illustration</span>
   }
 
   @Test
   public void testGetterSetter() {
      System.out.println(&quot;Run @Test testGetterSetter&quot;);<span class="color-comment"> // for illustration</span>
      int value = 33;
      number1.setNumber(value);
      assertEquals(&quot;error in getter/setter&quot;, value, number1.getNumber());
   }
 
   @Test
   public void testAdd() {
      System.out.println(&quot;Run @Test testAdd&quot;);<span class="color-comment"> // for illustration</span>
      assertEquals(&quot;error in add()&quot;, 33, number1.add(number2).getNumber());
      assertEquals(&quot;error in add()&quot;, 55, number1.add(number2).getNumber());
   }
 
   @Test
   public void testDiv() {
      System.out.println(&quot;Run @Test testDiv&quot;);<span class="color-comment"> // for illustration</span>
      assertEquals(&quot;error in div()&quot;, 2, number2.div(number1).getNumber());
      assertEquals(&quot;error in div()&quot;, 0, number2.div(number1).getNumber());
   }
 
   @Test(expected = IllegalArgumentException.class)
   public void testDivByZero() {
      System.out.println(&quot;Run @Test testDivByZero&quot;);<span class="color-comment"> // for illustration</span>
      number2.setNumber(0);
      number1.div(number2);
   }
}</pre>
</td>
</tr>
</tbody>
</table>
</li>

<li>Run the test and observe the result. Modify some lines to make the test fails and observe the result.
<p>The output, used for illustrating the sequence of operations, is as follows:</p>
<pre class="output">
Run @Before
Run @Test testDivByZero
Run @After
Run @Before
Run @Test testAdd
Run @After
Run @Before
Run @Test testDiv
Run @After
Run @Before
Run @Test testGetterSetter
Run @After</pre>
</li>
</ol>


<h5>Test Fixtures, <span class="font-code">@Before</span> and <span class="font-code">@After</span></h5>

<p>A test fixtures is a fixed state of a set of objects used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run so that results are repeatable.</p>

<p>In JUnit 4, fixtures are setup via the <code>@Before</code> and <code>@After</code> annotations.</p>

<ul>
<li>The <code>@Before</code> annotated method (known as <code>setup()</code>) will be run before EACH test method (annotated with <code>@Test</code>) to set up the fixtures.</li>
<li>The <code>@After</code> annotation method (known as tearDown()) will be run after EACH test.</li>
</ul>

<p>We typically declare text fixtures as private instance variables; initialize via <code>@Before</code> annotated method; and clean-up via <code>@After</code> annotation method. Each test method runs on its own set of text fixtures with the same initial states. This ensures isolation between the test methods.</p>

<h5><span class="font-code">@BeforeClass</span> and <span class="font-code">@AfterClass</span></h5>

<p>Beside the <code>@Before</code> and <code>@After</code>, there is also <code>@BeforeClass</code> and <code>@AfterClass</code>.</p>
<ul>
<li>The <code>@BeforeClass</code> annotated method will be run once before any test, which can be used to perform one-time initialization tasks such as setting up database connection.</li>
<li>The <code>@AfterClass</code> annotated method will be run once after all tests, which can be used to perform housekeeping tasks such as closing database connection.</li>
</ul>

<h4>JUnit 4's Annotations</h4>

<p>JUnit 4 defines the following six annotations in package <code>org.junit</code>.</p>

<table class="table-zebra">
<tr>
<th>Annotation</th>
<th>Description</th>
</tr>

<tr>
<td><code>@Test</code></td>
<td>The annotated method is to be run as a test method.</td>
</tr>

<tr class="tr-alt">
<td><code>@Before</code></td>
<td>The annotated method is to be run before EACH of the test method.</td>
</tr>

<tr>
<td><code>@After</code></td>
<td>The annotated method is to be run after EACH of the test method.</td>
</tr>

<tr class="tr-alt">
<td><code>@BeforeClass</code></td>
<td>The annotated method is to be run ONCE before any of the test method.</td>
</tr>

<tr>
<td><code>@AfterClass</code></td>
<td>The annotated method is to be run ONCE after all the test methods.</td>
</tr>

<tr class="tr-alt">
<td><code>@Ignore</code></td>
<td>Ignore (don't run) the test method. This is a convenient way to mark out a test method (e.g. after some code changes that fail this test.)</td>
</tr>

<tr>
<td><code>@Rule</code></td>
<td>[TODO]</td>
</tr>
</table>

<h5>Example of <span class="font-code">@Ignore</span></h5>
<pre class="color-example">
@Ignore(&quot;Under Construction&quot;)
@Test
public void someTest() {
   ......
}</pre>


<h4>JUnit - Exceptions Test</h4>

<p>To test if the code throws a desired exception, use annotation <code>@Test(expected = <em>exception</em>.class)</code>, as illustrated in the previous example.</p>

<h4>JUnit - Timing Test</h4>

<p>To handle or test timeout, use annotation <code>@Test(timeout = <em>msec</em>)</code>. For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8</pre>
</td>
<td>
<pre>
import org.junit.Test;
 
public class TimeoutTest {
   @Test(timeout=1000) <span class="color-comment"> // milliseconds</span>
   public void test() {
      while (true) {}
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<pre class="output">
java.lang.Exception: test timed out after 1000 milliseconds
......</pre>

<h4>JUnit - Parameterized Test</h4>

<p>JUnit 4 introduces parameterized test which allows you to run the same test over and over again using different values.  To use parameterized test:</p>

<ol>
<li>Annotate the test class with <code>@RunWith(Parameterized.class)</code>.</li>

<li>Create a public static method annotated with <code>@Parameters</code> that returns a list (<code>Iterable&lt;Object&gt;</code>) as test data set.</li>

<li>Create a public constructor that takes its input from the <code>@Parameters</code> method to setup the test fixtures defined as instance variables. The constructor will be run before EACH test.</li>

<li>Create your tests case(s) using the instance variables as the source of the test data. </li>
</ol>

<p>For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55</pre>
</td>
<td>
<pre>
import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
 
import java.util.Arrays;
 
@RunWith(Parameterized.class)
public class MyNumberParameterizedTest {
   private MyNumber number1, number2;  <span class="color-comment">// Test fixtures</span>
   private int result;
 
   @Parameters
   <span class="color-comment">// Feed inputs to constructor</span>
   public static Iterable&lt;Object[]&gt; data()  {
      System.out.println(&quot;Run @Parameters&quot;);
      return Arrays.asList(new Object[][] {
         { new MyNumber(1), new MyNumber(2), 3 },
         { new MyNumber(-1), new MyNumber(-2), -3 },
         { new MyNumber(3), new MyNumber(-3), 0 },
      });
   }
 
  <span class="color-comment"> // Constructor</span>
  <span class="color-comment"> // For each test, this constructor gets its inputs from</span>
  <span class="color-comment"> // the @Parameters method to setup the test fixtures.</span>
   public MyNumberParameterizedTest(MyNumber number1, MyNumber number2, int result) {
      System.out.println(&quot;Run constructor&quot;);
      this.number1 = number1;
      this.number2 = number2;
      this.result = result;
      System.out.println(&quot;-- number1=&quot; + number1.getNumber()
                       + &quot; number2=&quot; + number2.getNumber()
                       + &quot; result=&quot; + result);
   }
 
   @Before
   <span class="color-comment">// Run after constructor, before @Test</span>
   public void setUp() throws Exception {
      System.out.println(&quot;Run @Before&quot;);
      System.out.println(&quot;-- number1=&quot; + number1.getNumber() + &quot; number2=&quot; + number2.getNumber());
   }
 
   @Test
   public void test() {
      System.out.println(&quot;Run @Test&quot;);
      assertEquals(result, number1.add(number2).getNumber());
   }
 
   @After
   public void tearDown() throws Exception { }
}</pre>
</td>
</tr>
</tbody>
</table>

<pre class="output">
Run @Parameters
Run constructor
-- number1=1 number2=2 result=3
Run @Before
-- number1=1 number2=2
Run @Test
Run constructor
-- number1=-1 number2=-2 result=-3
Run @Before
-- number1=-1 number2=-2
Run @Test
Run constructor
-- number1=3 number2=-3 result=0
Run @Before
-- number1=3 number2=-3
Run @Test</pre>

<p>The output trace suggests that <code>@Parameters</code> method is run once. For EACH test, the constructor is run first, followed by <code>@Before</code>, <code>@Test</code> and <code>@After</code> methods.</p>

<h4>Another Example</h4>

<pre class="color-example">
import org.junit.*;
import java.util.ArrayList;
import org.junit.runner.Result;
   
public class <strong>ArrayListTest</strong> {
   private ArrayList&lt;String&gt; lst;   <span class="color-comment">// Test fixtures</span>
   
   <span class="color-comment">// Initialize test fixtures before each test method</span>
   @Before  
   public void init() throws Exception {
      lst = new ArrayList&lt;String&gt;();
      lst.add(&quot;alpha&quot;);    <span class="color-comment">// at index 0</span>
      lst.add(&quot;beta&quot;);     <span class="color-comment">// at index 1</span>
   }
   
   <span class="color-comment">// Test method to test the insert operation</span>
   @Test   
   public void insertTest() {
      <span class="color-comment">// assertEquals(String message, long expected, long actual)</span>
      Assert.assertEquals(&quot;wrong size&quot;, 2, lst.size());
      lst.add(1, &quot;charlie&quot;);
      Assert.assertEquals(&quot;wrong size&quot;, 3, lst.size());
      <span class="color-comment">// assertEquals(String message, Object expected, Object actual)
      // Use String.equals() for comparison</span>
      Assert.assertEquals(&quot;wrong element&quot;, &quot;alpha&quot;,   lst.get(0));
      Assert.assertEquals(&quot;wrong element&quot;, &quot;charlie&quot;, lst.get(1));
      Assert.assertEquals(&quot;wrong element&quot;, &quot;beta&quot;,    lst.get(2));
   }
   
   <span class="color-comment">// Test method to test the replace operation</span>
   @Test   
   public void replaceTest() {
      Assert.assertEquals(&quot;wrong size&quot;, 2, lst.size());
      lst.set(1, &quot;charlie&quot;);
      Assert.assertEquals(&quot;wrong size&quot;, 2, lst.size());
      Assert.assertEquals(&quot;wrong element&quot;, &quot;alpha&quot;,   lst.get(0));
      Assert.assertEquals(&quot;wrong element&quot;, &quot;charlie&quot;, lst.get(1));
   }
   
   public static void main(String[] args) {
      Result r = org.junit.runner.JUnitCore.runClasses(ArrayListTest.class);
      System.out.println(r.wasSuccessful());
   }
}</pre>

<p>To run the test, you can either include a <code>main()</code> method as above, or use the command-line.</p>

<h4>JUnit Package org.junit</h4>
<p>The core package for JUnit 4 is <code>org.unit</code>, which is simple and elegantly designed.</p>

<ul>
<li><code>Assert</code> class: contains <code>static</code> methods <code>assertEquals()</code>, <code>assertTrue()</code>, <code>assertFalse()</code>, <code>assertNull()</code>, <code>assertNotNull()</code>, <code>assertSame()</code>, <code>assertNotSame()</code>, <code>assertThat()</code>, <code>assertArrayEquals()</code>.</li>

<li><code>Assume</code> class: contains <code>static</code> methods <code>assumeTrue()</code>, <code>assumeNotNull()</code>, <code>assumeThat()</code>, <code>assumeNoException()</code>.</li>

<li><code>@Test</code>: mark the method as a test method.</li>

<li><code>@Test(expected=IOException.class)</code>: The test is expected to trigger this exception.</li>

<li><code>@Test(timeout=1000)</code>: Treat the test as fail, if it exceeds the specified milliseconds.</li>

<li><code>@Before</code> and <code>@After</code>: mark the method as to be run before and after EACH test method, for initializing and cleaning-up test fixtures.</li>

<li><code>@BeforeClass</code> and <code>@AfterClass</code>: mark the method as to be run before and after ONCE for the class.</li>

<li><code>@Ignore</code>: ignore this test method (annotated with <code>@Test</code>).</li>

<li><code>@Rule</code>: [TODO]</li>
</ul>


<h3>JUnit 3.8 (deprecated?)</h3>

<p>JUnit 3.8, which uses <em>strict naming convention</em> to denote various entities, is probably deprecated. I suggest that you move to JUnit 4, which is more intuitive by using annotation.</p>

<h4>Let's begin with an Example</h4>

<p>Below is a Java program to be tested. Note that there is a logical error in the program.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15</pre>
</td>
<td>
<pre>
public class Grade {
   public static char getLetterGrade(int mark) {
      <span class="color-comment">// assume that mark is between 0 and 100 (inclusive)</span>
      assert (mark &gt;= 0 &amp;&amp; mark &lt;= 100) : &quot;mark is out-of-range: &quot; + mark;
      if (mark &gt;= 75) {
         return 'A';
      } else if (mark &gt;= 60) {
         return 'B';
      } else if (<span class="color-error">mark &gt; 50</span>) {   <span class="color-comment">// an logical error here</span>
         return 'C';
      } else {
         return 'F';
      }
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>The unit-test program (using JUnit framework) is as follows. Black-box test cases are set up to test typical values as well as boundary values.</p>


<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36</pre>
</td>
<td>
<pre>
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
   
public class GradeUnitTest extends TestCase {
   
   public GradeUnitTest(String name) { super(name); }
   protected void setUp() throws Exception { super.setUp(); }
   protected void tearDown() throws Exception { super.tearDown(); }
   
   public void testTypical() {      <span class="color-comment">// test a typical value in partitions</span>
      assertEquals(&quot;wrong grade&quot;, 'A', Grade.getLetterGrade(95));
      assertEquals(&quot;wrong grade&quot;, 'B', Grade.getLetterGrade(72));
      assertEquals(&quot;wrong grade&quot;, 'C', Grade.getLetterGrade(55));
      assertEquals(&quot;wrong grade&quot;, 'F', Grade.getLetterGrade(30));
   }
   
   public void testBoundaries() {   <span class="color-comment">// test the boundaries of the partitions</span>
      assertEquals(&quot;wrong grade&quot;, 'A', Grade.getLetterGrade(75));
      assertEquals(&quot;wrong grade&quot;, 'A', Grade.getLetterGrade(100));
      assertEquals(&quot;wrong grade&quot;, 'B', Grade.getLetterGrade(60));
      assertEquals(&quot;wrong grade&quot;, 'B', Grade.getLetterGrade(74));
      assertEquals(&quot;wrong grade&quot;, 'C', Grade.getLetterGrade(50));
      assertEquals(&quot;wrong grade&quot;, 'C', Grade.getLetterGrade(59));
      assertEquals(&quot;wrong grade&quot;, 'F', Grade.getLetterGrade(0));
      assertEquals(&quot;wrong grade&quot;, 'F', Grade.getLetterGrade(49));
   }
   
   public static Test suite() {   <span class="color-comment">// For putting into a TestSuite.</span>
      return new TestSuite(GradeUnitTest.class);
   }
   
   public static void main(String[] args) {
      junit.textui.TestRunner.run(GradeUnitTest.class);
   }
}</pre></td>
</tr>
</tbody>
</table>

<p>Compile and execute the program (with JUnit JAR file included in the <code>CLASSPATH</code>) as follows. Note that one of the unit-test cases catches the logical error.</p> 

<pre class="color-command">
&gt; set CLASSPATH=.;%CLASSPATH%;c:\junit\junit-3.8.2.jar
&gt; javac GradeUnitTest.java
&gt; java GradeUnitTest</pre>

<pre class="output">
..F
Time: 0.006
There was 1 failure:
1) testBoundaries(GradeUnitTest)junit.framework.AssertionFailedError: wrong grade expected:&lt;C&gt; but was:&lt;F&gt;
        at GradeUnitTest.testBoundaries(GradeUnitTest.java:23)
        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
        at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
        at GradeUnitTest.main(GradeUnitTest.java:34)
FAILURES!!!
Tests run: 2,  Failures: 1,  Errors: 0</pre>

<h4>JUnit Terminology</h4>

<ul>
<li>Class <code>TestCase</code>:  A class that contains <em>test methods</em>  should derive from this superclass.  Each <code>TestCase</code> can include many <em>test methods</em>.</li>
<li>Test Methods: A test methods must be named <code>testXxx()</code>. This is because JUnit uses the <em>reflection</em> mechanism to find and run these methods. Inside a test method, you can use a variation of the <code>assert()</code> method (e.g., <code>assertTrue()</code>, <code>assertFalse()</code>, <code>assertEquals()</code>) to compare the expected and actual results.</li>
<li>Test Fixture: The set of objects that a test method operates on. You declare these objects as a private variable, and initialize them by overriding the <code>setUp()</code> or via the constructor. You can perform clean-up operations by overriding <code>tearDown()</code>. Each test method runs on its own <code>TestCase</code> instance with its own set of text fixtures. This ensures isolation between the test methods.</li>
<li>Class <code>TestSuite</code>:  You can combine many <code>TestCases</code> (e.g., written by different person) into a <em>test suite</em>, and run them at once.</li>
<li>Class <code>TestRunner</code>:  for running the <code>TestCase</code> or <code>TestSuite</code>.</li>
</ul>

<h4>Writing Tests</h4>

<p><strong>Step 1</strong>: Extend a subclass of <code>junit.framework.TestCase</code>:</p>

<pre class="color-example">
import junit.framework.*;
public class JUnit38DemoArrayList extends TestCase {
   public JUnit38DemoArrayList(String name) { super(name); }   <span class="color-comment">// constructor</span>
} </pre>

<p><strong>Step 2</strong>: If two or more test methods use a common set of test objects (called <em>test fixture</em>s), declare the test fixtures as instance variables.  For example, suppose we are testing the class <code>ArrayList</code>.</p>
<pre class="color-example">
private ArrayList&lt;String&gt; lst;     <span class="color-comment">// declare test fixture instance.</span></pre>

<p><strong>Step 3</strong>: Initialize the text fixture.  You can override <code>setUp()</code> or use the constructor.  Each test method runs on its own <code>TestCase</code> instance. This provides isolation between test methods.  Each test method invoke the constructor to construct an instance of the <code>TestCase</code>, followed by <code>setUp()</code>, run the steps coded inside the test method, and the <code>tearDown()</code> before exiting.  The test methods may run concurrently.  For example, let's initialize our test fixture <code>ArrayList</code> with two <code>String</code> elements.</p>
<pre class="color-example"><span class="color-comment">// Initialize the test fixture used by all the test methods</span>
protected void setUp() throws Exception {
   lst = new ArrayList&lt;String&gt;();
   lst.add(&quot;alpha&quot;);    <span class="color-comment">// at index 0</span>
   lst.add(&quot;beta&quot;);     <span class="color-comment">// at index 1</span>
}
protected void tearDown() throws Exception { super.tearDown(); }  <span class="color-comment">// for clean-up operation</span></pre>

<p><strong>Step 4</strong>: Write the test methods for this <code>TestCase</code>. All the test methods must be named <code>testXxx()</code>, as JUnit uses <em>reflection</em> to find these test methods. For example,</p>
<pre class="color-example">
<span class="color-comment">// test method to test the insert operation</span>
public void testInsert() {
   assertEquals(&quot;wrong size&quot;, 2, lst.size());  <span class="color-comment">// error message, expected, actual</span>
   lst.add(1, &quot;charlie&quot;);
   assertEquals(&quot;wrong size&quot;, 3, lst.size());
   assertEquals(&quot;wrong element&quot;, &quot;alpha&quot;,   lst.get(0));
   assertEquals(&quot;wrong element&quot;, &quot;charlie&quot;, lst.get(1));
   assertEquals(&quot;wrong element&quot;, &quot;beta&quot;,    lst.get(2));
}
<span class="color-comment">// test method to test the replace operation</span>
public void testReplace() {
   assertEquals(&quot;wrong size&quot;, 2, lst.size());
   lst.set(1, &quot;charlie&quot;);
   assertEquals(&quot;wrong size&quot;, 2, lst.size());
   assertEquals(&quot;wrong element&quot;, &quot;alpha&quot;,   lst.get(0));
   assertEquals(&quot;wrong element&quot;, &quot;charlie&quot;, lst.get(1));
}</pre>

<p><strong>Step 5</strong>: You can now run the <code>TestCase</code>, using JUnit-provided <code>TestRunner</code>.  There are two versions of <code>TestRunner</code>:  text-based <code>junit.textui.TestRunner</code>, and GUI-based <code>junit.swingui.TestRunner</code>. To use the text-based <code>TestRunner</code>, you could include a <code>main()</code> method as follows:</p>
<pre class="color-example">
public static void main(String[] args) {
   junit.textui.TestRunner.run(JUnit38DemoArrayList.class);
}</pre>

<p>The expected outputs are:</p>
<pre class="output">
..
Time: 0.001

OK (2 tests)</pre>

<p>You can also invoke the <code>TestRunner</code> from command-line:</p>
<pre class="color-command">
&gt; java junit.textui.TestRunner JUnit38DemoArrayList</pre>

<p>You can invoke the GUI-based <code>TestRunner</code> from command-line:</p>
<pre class="color-command">
&gt; java junit.swingui.TestRunner JUnit38DemoArrayList</pre>

<p><strong>Step 6</strong>: If there are many <code>TestCase</code>s (could be written by different people), you can put them together into a <code>TestSuite</code> and run all the <code>TestCase</code>s at once. To do so, in each of the <code>TestCase</code>s, create a static method <code>suite()</code> to extract all the test methods as follows:</p>
<pre class="color-example">
<span class="color-comment">// In JUnit38DemoArrayList Class - do the same for other TestCase classes</span>
public static Test suite() {
   return new TestSuite(JUnit38DemoArrayList.class);
}</pre>

<p>Next, write a class to include all the <code>TestCase</code>s into a <code>TestSuite</code>.</p>
<pre class="color-example">
import java.framework.*; 
public class AllTests {   
   public static void main(String[] args) {
      junit.textui.TestRunner.run(suite());    
   }
   public static Test suite() {
      TestSuite suite = new TestSuite();
      suite.addTest(JUnit38DemoArrayList.suite());
      <span class="color-comment">// other TestCase classes</span>
      //suite.addTest(OtherTestCase1.suite());       
      //suite.addTest(OtherTestCase2.suite());
      return suite;
   }
}</pre>

<h3>Automating Unit Testing with ANT or Maven</h3>

<p>[TODO] To tidy up.</p>

<p>Apache's ANT is the <em>de facto</em> standard for automated building of Java applications (similar to Unix's &quot;<code>make</code>&quot; utility).  You can download ANT from <a href="http://ant.apache.org">ant.apache.org</a> (download the ZIP version, and unzip it to a directory of your choice).</p>

<p>We shall use ANT to automate building and testing. First, create a configuration file called <code>&quot;build.xml&quot;</code> as follows:</p>

<pre class="color-example">
&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!-- to save as &quot;build.xml&quot; --&gt;
   
&lt;project name=&quot;Black-Box Unit Test Demo&quot; default=&quot;run&quot; basedir=&quot;.&quot;&gt;
  &lt;!-- build all classes in this directory --&gt;
  &lt;!-- To run this: use &quot;ant build&quot; --&gt;
  &lt;!-- need to include junit.jar in the classpath --&gt;
  &lt;target name=&quot;build&quot;&gt;
  &lt;javac srcdir=&quot;${basedir}&quot;/&gt;
  &lt;echo message=&quot;Build done&quot; /&gt;
  &lt;/target&gt;
   
  &lt;!-- Test and build all files  --&gt;
  &lt;!-- To run this: use &quot;ant&quot; (default) or &quot;ant run&quot; --&gt;
  &lt;target name=&quot;run&quot; depends=&quot;build&quot;&gt;
  &lt;java taskname=&quot;Test&quot; classname=&quot;GradeTestCase&quot; fork=&quot;true&quot; failonerror=&quot;true&quot; /&gt;
  &lt;echo message=&quot;Unit Test done&quot; /&gt;
  &lt;/target&gt;
   
  &lt;!-- delete all class files --&gt;
  &lt;!-- To run this: use &quot;ant clean&quot; --&gt;
  &lt;target name=&quot;clean&quot;&gt;
  &lt;delete&gt;
  &lt;fileset dir=&quot;${basedir}&quot; includes=&quot;*.class&quot; /&gt;
  &lt;/delete&gt;
  &lt;echo message=&quot;clean done&quot; /&gt;
  &lt;/target&gt;
&lt;/project&gt;</pre> 

<p>To build using the above build file, run &quot;<code>ant</code>&quot;. (By default, it executes &quot;<code>ant run</code>&quot;, which is depends on &quot;<code>build</code>&quot;, &quot;<code>build</code>&quot; get executed to compile the program, then    &quot;<code>run</code>&quot; get expected to run the testing. To run only the compilation, use &quot;<code>ant build</code>&quot;. To run only the cleanup, use &quot;<code>ant clean</code>&quot;.)</p>

<pre class="color-command">
prompt&gt; <strong>ant</strong></pre>
<pre class="output">
Buildfile: build.xml
  
build:
    [javac] Compiling 4 source files
     [echo] Build done
  
run:
     [Test] ..F
     [Test] Time: 0.005
     [Test] There was 1 failure:
     [Test] 1) testBoundaries(GradeTestCase)junit.framework.AssertionFailedError: expected:&lt;C&gt; but was:&lt;F&gt;
     [Test]     at GradeTestCase.testBoundaries(GradeTestCase.java:23)
     [Test]     at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
     [Test]     at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
     [Test]     at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
     [Test]     at GradeTestCase.main(GradeTestCase.java:34)
     [Test]
     [Test] FAILURES!!!
     [Test] Tests run: 2,  Failures: 1,  Errors: 0
     [Test]
     [echo] Unit Test done</pre>

<p>[TODO] to be continued...</p>

<h3>Unit Testing Best Practices</h3>

<h4>Writing Test Cases</h4>

<p>How to test a program to ensure correctly? There are two techniques: white-box testing and black-box testing. White-box testing inspect the program codes and test the program logic.  Black-box testing does not inspect the program codes, but looking at the input-output, treating the program as a black box.</p>

<p>For black-box testing, the most common approach is to partition the inputs, and design test cases for each input partition. The test cases could test on a typical input value as well as the boundaries.</p>

<p>For example, the following program converts a given mark (0-100) to a letter grade ('A' to 'F'). There is a logical error in the program.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45</pre>
</td>
<td>
<pre>
import static org.junit.Assert.assertEquals;
import org.junit.Test;
 
public class GradeLetters {
 
  <span class="color-comment"> // Convert given mark into letter grade</span>
  <span class="color-comment"> // Assume that mark is between 0 and 100 (inclusive)</span>
   public static char getLetterGrade(int mark) {
     <span class="color-comment"> // Assert is disabled by default,</span>
     <span class="color-comment"> // To enable, run with option -enableassertions (or -ea)</span>
      assert (mark &gt;= 0 &amp;&amp; mark &lt;= 100) : &quot;mark is out-of-range: &quot; + mark;
 
      if (mark &gt;= 75) {
         return 'A';
      } else if (mark &gt;= 60) {
         return 'B';
      } else if (mark &gt; 50) {  <span class="color-comment"> // an logical error here</span>
         return 'C';
      } else {
         return 'F';
      }
   }
 
  <span class="color-comment"> // Test a typical value in each partition</span>
   @Test
   public void testTypical() {
      assertEquals(&quot;wrong grade&quot;, 'A', GradeLetters.getLetterGrade(95));
      assertEquals(&quot;wrong grade&quot;, 'B', GradeLetters.getLetterGrade(72));
      assertEquals(&quot;wrong grade&quot;, 'C', GradeLetters.getLetterGrade(55));
      assertEquals(&quot;wrong grade&quot;, 'F', GradeLetters.getLetterGrade(30));
   }
 
  <span class="color-comment"> // Test the boundaries of the each partition</span>
   @Test
   public void testBoundaries() {
      assertEquals(&quot;wrong grade&quot;, 'A', GradeLetters.getLetterGrade(75));
      assertEquals(&quot;wrong grade&quot;, 'A', GradeLetters.getLetterGrade(100));
      assertEquals(&quot;wrong grade&quot;, 'B', GradeLetters.getLetterGrade(60));
      assertEquals(&quot;wrong grade&quot;, 'B', GradeLetters.getLetterGrade(74));
      assertEquals(&quot;wrong grade&quot;, 'C', GradeLetters.getLetterGrade(50));<span class="color-comment"> // fail</span>
      assertEquals(&quot;wrong grade&quot;, 'C', GradeLetters.getLetterGrade(59));
      assertEquals(&quot;wrong grade&quot;, 'F', GradeLetters.getLetterGrade(0));
      assertEquals(&quot;wrong grade&quot;, 'F', GradeLetters.getLetterGrade(49));
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>Try to run the above tests to find the logical error. Take note that <code>assertEquals()</code> does not accept <code>char</code> as arguments, but upcast to <code>long</code>. That is, the output show the <code>char</code>'s numeric code.</p>

<h4>Unit Testing Best Practices (From JUnit FAQ)</h4>

<p>The followings are extracted from JUnit FAQ:</p>

<ol>
<li>When should the tests be written?<br />
Tests should be written before the code.  Good tests tell you how to best design the system for its intended use.  They also prevent tendencies to over-build the software.  When all the tests pass, you know you're done.
Whenever a customer reports a bug, first write the necessary unit test(s) to expose the bug(s) and fix them.  This make it almost impossible for the same bug to resurface later.</li>
<li>Do I have to write a test for everything?<br />
No, just test things that could reasonably break. Don't write tests that turn out to be testing the operating system or environment or the compiler. For example,
<pre class="color-example">
public class AClass {
   int x;
   public AClass(int x) { this.x = x; }
   int getX() { return x; }
   void setX() { this.x = x; }
}
</pre>
A test that testing <code>getX(setX(y)) == y</code> is merely testing for <code>this.y = y</code>, i,e, testing the compiler!  This can't break unless the compiler or the interpreter break!</li>

<li>How often should I run my tests?<br />
Run unit test as often as possible, ideally every time the code is changed.
Run all your acceptance, integration, stress, and unit tests at least once per day (for your nightly-built).</li>

</ol>

<h3>TestNG</h3>

<p>TestNG (Test Next Generation) (@ <a href="http://testng.org/">http://testng.org/</a>) is a testing framework inspired from JUnit and NUnit (the xUnit family), but introduces new functionalities like dependency testing, grouping concept to make testing easier and  more powerful.</p>

<p>TestNG is designed to cover all types of tests: unit, integration, functional, and etc.</p>

<h4>Installing TestNG</h4>

<p><span class="line-heading">Installing TestNG</span>: From TestNG download site (@ <a href="http://testng.org/doc/download.html">http://testng.org/doc/download.html</a>), download the &quot;<code>testng-6.#.zip</code>&quot;. Unzip the downloaded file. The binaries is kept in &quot;<code>testng-6.#.jar</code>&quot;</p>

<p>To install TestNG Eclipse Plug-in &rArr; Launch Eclipse &rArr; Help &rArr; Install New Software &rArr; In Work with, enter http://beust.com/eclipse &rArr; Add &rArr; Select TestNG.</p>

<p><span class="line-heading">Using TestNG</span>: To use TestNG, include the jar-files in the <code>CLASSPATH</code>.</p>
<p>In Eclipse, right-click on the project &rArr; Add Library &rArr; TestNG.</p>

<p><span class="line-heading">API Documentation</span>: The TestNG API documentation is available @ <a href="http://testng.org/javadocs/">http://testng.org/javadocs/</a>.</p>

<h4>Getting Started with TestNG with Example</h4>

<p>I shall assume that you are familiar with JUnit 4.</p>

<p>Let's use TestNG (instead of JUnit) to test the <code>MyNumber</code> class written in the earlier section.</p>

<p>In Eclipse, right-click on the project &rArr; New &rArr; TestNG &rArr; TestNG class.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45</pre>
</td>
<td>
<pre>
import static org.testng.Assert.*;
import org.testng.annotations.*;
 
public class MyNumberTestNGTest {
   private MyNumber number1, number2; <span class="color-comment">// Test Fixtures</span>
 
   @BeforeClass
   public void oneTimeSetUp() {
      System.out.println(&quot;@BeforeClass - oneTimeSetUp&quot;);
   }
 
   @AfterClass
   public void oneTimeTearDown() {
      System.out.println(&quot;@AfterClass - oneTimeTearDown&quot;);
   }
 
   @BeforeMethod
   public void setUp() {
      number1 = new MyNumber();
      number2 = new MyNumber();
      System.out.println(&quot;@BeforeMethod - setUp before each test&quot;);
   }
 
   @AfterMethod
   public void tearDown() {
      System.out.println(&quot;@AfterMethod - tearDown before each test&quot;);
   }
 
   @Test
   public void testAdd() {
      System.out.println(&quot;@Test - testAdd&quot;);
      number1.setNumber(1);
      number2.setNumber(2);
      <span class="color-comment">// assertEquals(actual, expected)</span>
      assertEquals(number1.add(number2).getNumber(), 3);
   }
 
   @Test(expectedExceptions = IllegalArgumentException.class)
   public void testDiv() {
      System.out.println(&quot;@Test - testDiv with exception&quot;);
      number1.setNumber(1);
      number2.setNumber(0);
      number1.div(number2);
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>To run the test case under Eclipse, right-click on the file &rArr; Run as &rArr; TestNG Test.</p>

<pre class="output">
@BeforeClass - oneTimeSetUp
@BeforeMethod - setUp before each test
@Test - testAdd
@AfterMethod - tearDown before each test
@BeforeMethod - setUp before each test
@Test - testDiv with exception
@AfterMethod - tearDown before each test
@AfterClass - oneTimeTearDown
PASSED: testAdd
PASSED: testDiv

===============================================
    Default test
    Tests run: 2, Failures: 0, Skips: 0
===============================================</pre>

<p>As seen from the output, the <code>@BeforeClass</code> annotated method is run ONCE for one-time setup; the <code>@AfterClass</code> is run ONCE for one-time tear down. The <code>@BeforeMethod</code> and <code>@AfterMethod</code> (called <code>@Before</code> and <code>@After</code> in JUnit 4) are run before and after EACH <code>@Test</code>.</p>

<p>So far, everything is similar to JUnit 4, except some name changes.</p>

<h4>Running TestNG Test Cases</h4>

<p>There are several ways to run test case for TestNG:</p>
<ul>
<li>With an XML description file.</li>
<li>With ANT build tool.</li>
</ul>

<h5>Via TestNG XML Description File</h5>

<p>TestNG (compared with JUnit) introduces an XML description to describe test suite/test cases to provide more flexibility in running tests.</p>

<p>Prepare the following XML Description file (says &quot;<code>testing.xml</code>&quot;), which describes a test suite comprising of test cases. Each test case comprises of many Java classes.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9</pre>
</td>
<td>
<pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE suite SYSTEM &quot;http://testng.org/testng-1.0.dtd&quot; &gt;
&lt;suite name=&quot;MyNumberTestSuite&quot;&gt;
  &lt;test name=&quot;MyNumberTest&quot;&gt;
    &lt;classes&gt;
       &lt;class name=&quot;MyNumberTestNGTest&quot;/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</pre>
</td>
</tr>
</tbody>
</table>

<p>You can run the test suite in command-line:</p>

<pre class="color-command">
// Set CLASSPATH to include the TestNG jar-file
// For Linux/Mac with bash shell
$ export CLASSPATH=.:$CLASSPATH:/path/to/testng-6.8/testng-6.8.jar
 
// For Windows
&gt; set CLASSPATH=.;%CLASSPATH%;x:\path\to\testng-6.8\testng-6.8.jar
 
// Compile the Java test classes
$ javac MyNumberTestNGTest.java
 
// Run the test thru XML description file
$ java org.testng.TestNG testing.xml
@BeforeClass - oneTimeSetUp
@BeforeMethod - setUp before each test
@Test - testAdd
@AfterMethod - tearDown before each test
@BeforeMethod - setUp before each test
@Test - testDiv with exception
@AfterMethod - tearDown before each test
@AfterClass - oneTimeTearDown
 
===============================================
MyNumberTestSuite
Total tests run: 2, Failures: 0, Skips: 0
===============================================</pre>

<p>In Eclipse, to run a suite description file &rArr; Run &rArr; Run Configurations &rArr; Suite &rArr; Select the desired XML description file.</p>

<p>The XML description file has this syntax:</p>
<ol>
<li>The root tag is &lt;suite&gt;.</li>
<li>The &lt;suite&gt; tag can contain one or more &lt;test&gt; tags.</li>
<li>The &lt;test&gt; tag can contain one or more &lt;classes&gt; tags.</li>
<li>The &lt;classes&gt; tag can contain one or more &lt;method&gt; tags.</li>
</ol>


<h5>Via ANT Script</h5>

<p>[TODO]</p>

<h4>TestNG's Annotations</h4>

<table class="table-zebra">
<tr>
<th>Name</th>
<th>Description</th>
</tr>

<tr>
<td><code>@Test</code></td>
<td>Mark a method (or class) as a test method (or class).</td>
</tr>

<tr class="tr-alt">
<td><code>@BeforeSuite / @AfterSuite</code></td>
<td>Run ONCE before and after all tests in this suite.</td>
</tr>

<tr>
<td><code>@BeforeClass / @AfterClass</code></td>
<td>Run ONCE before and after all tests in this class.</td>
</tr>

<tr class="tr-alt">
<td><code>@BeforeMethod / @AfterMethod</code></td>
<td>Run before and after EACH @Test method.</td>
</tr>

<tr>
<td><code>@BeforeTest / @AfterTest</code></td>
<td>[TODO]</td>
</tr>

<tr class="tr-alt">
<td><code>@BeforeGroups / @AfterGroups</code></td>
<td>[TODO]</td>
</tr>

<tr>
<td><code>@Parameters</code></td>
<td>Mark this test method is to get its parameters from the XML description file.</td>
</tr>

<tr class="tr-alt">
<td><code>@DataProvider</code></td>
<td>Mark the method, which return an <code>Object[][]</code>, as data source for a test method.</td>
</tr>

<tr>
<td><code>@Factory</code></td>
<td>[TODO]</td>
</tr>

<tr class="tr-alt">
<td><code>@Listeners</code></td>
<td>[TODO]</td>
</tr>
</table>


<h4>TestNG - Exception Test</h4>

<p>Mark the test method that is expected to throw an exception with <code>@Test(expectedExceptions = <em>ExceptionName</em>.class)</code> as seen in the above example.</p>

<p>JUnit 4 uses annotation <code>@Test(expected = <em>ExceptionName</em>.class)</code>.</p>

<h4>TestNG - Ignore Test</h4>

<p>To ignore a test, mark it with annotation <code>@Test(enabled=false)</code>.</p>

<p>JUnit 4 uses an dedicated annotation <code>@Ignore</code> to override the <code>@Test</code> annotation.</p>

<h4>TestNG - Timing Test</h4>

<p>To set a timeout (milliseconds) for a test, use annotation <code>@Test(timeOut = <em>msec</em>)</code> (exactly the same as JUnit 4).</p>

<h4>TestNG - Parameterized Test</h4>

<h5>Via <span class="font-code">@Parameters</span> and the XML Description File <span class="font-code">&lt;parameter&gt;</span> Tag</h5>

<p>The test class is as follows:</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17</pre>
</td>
<td>
<pre>
import static org.testng.Assert.*;
import org.testng.annotations.*;
 
public class TestNGParameterizedTest1 {
  <span class="color-comment"> // Test fixtures</span>
   private MyNumber number1 = new MyNumber();
   private MyNumber number2 = new MyNumber();
 
   @Test
   @Parameters(value={&quot;value1&quot;, &quot;value2&quot;, &quot;result&quot;})
   public void testAdd(int value1, int value2, int result) {
      System.out.println(&quot;value1=&quot; + value1 + &quot; value2=&quot; + value2 + &quot; result=&quot; + result);
      number1.setNumber(value1);
      number2.setNumber(value2);
      assertEquals(number1.add(number2).getNumber(), result);
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>Mark the parameterized test method with annotation <code>@Parameters(value=xxx)</code>, where xxx is a String[]. The values will be passed into the arguments of the method in the same order.</p>

<p>The parameters are fed from the XML description file with the &lt;parameter&gt; tag. For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12</pre>
</td>
<td>
<pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE suite SYSTEM &quot;http://testng.org/testng-1.0.dtd&quot; &gt;
&lt;suite name=&quot;MyNumberTestSuite&quot;&gt;
  &lt;test name=&quot;MyNumberTest&quot;&gt;
    &lt;parameter name=&quot;value1&quot; value=&quot;11&quot; /&gt;
    &lt;parameter name=&quot;value2&quot; value=&quot;22&quot; /&gt;
    &lt;parameter name=&quot;result&quot; value=&quot;33&quot; /&gt;
    &lt;classes&gt;
       &lt;class name=&quot;TestNGParameterizedTest1&quot;/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</pre>
</td>
</tr>
</tbody>
</table>

<h5>Via the <span class="font-code">@DataProvider</span></h5>

<p>The <code>@Parameters</code> annotation can only used to pass simple type (such as <code>String</code> and <code>int</code>). To pass objects, you need to use <code>@DataProvider</code> annotation.</p>

<p>For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22</pre>
</td>
<td>
<pre>
import static org.testng.Assert.*;
import org.testng.annotations.*;
 
public class TestNGParameterizedTest2 {
   @Test(dataProvider = &quot;testAddDataProvider&quot;)
   public void testAdd(MyNumber number1, MyNumber number2, int result) {
      System.out.println(&quot;number1=&quot; + number1.getNumber()
                       + &quot; number2=&quot; + number2.getNumber()
                       + &quot; result=&quot; + result);
      assertEquals(number1.add(number2).getNumber(), result);
   }
 
  <span class="color-comment"> // Data Provider to feed the parameter data row-by-row to test</span>
   @DataProvider(name = &quot;testAddDataProvider&quot;)
   public Object[][] parameterIntTestProvider() {
      return new Object[][]{
         {new MyNumber(11), new MyNumber(22), 33},
         {new MyNumber(111), new MyNumber(222), 333},
         {new MyNumber(1111), new MyNumber(2222), 3333}
      };
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<pre class="output">
number1=11 number2=22 result=33
number1=111 number2=222 result=333
number1=1111 number2=2222 result=3333
PASSED: testAdd(MyNumber@1e53fc13, MyNumber@1bca52f3, 33)
PASSED: testAdd(MyNumber@74b1896c, MyNumber@33b54d4e, 333)
PASSED: testAdd(MyNumber@15e19d13, MyNumber@f0f559e, 3333)

===============================================
    Default test
    Tests run: 3, Failures: 0, Skips: 0
===============================================</pre>

<h4>TestNG - Method Dependency Test</h4>

<p>TestNG (compared with JUnit) introduces test dependency. For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22</pre>
</td>
<td>
<pre>
import static org.testng.Assert.*;
import org.testng.annotations.*;
 
public class TestNGDependsTest {
   @Test
   public void method1() {
      System.out.println(&quot;@Test: method1&quot;);
      assertTrue(true); <span class="color-comment"> // change to false</span>
   }
 
   @Test(dependsOnMethods={&quot;method1&quot;})
   public void method2() {
      System.out.println(&quot;@Test: method2&quot;);
      assertTrue(true);
   }
 
   @Test(dependsOnMethods={&quot;method1&quot;,&quot;method2&quot;})
   public void method3() {
      System.out.println(&quot;@Test: method3&quot;);
   }
}
 </pre>
</td>
</tr>
</tbody>
</table>

<pre class="output">
@Test: method1
@Test: method2
@Test: method3
PASSED: method1
PASSED: method2
PASSED: method3

===============================================
    Default test
    Tests run: 3, Failures: 0, Skips: 0
===============================================</pre>

<p>In <code>method1</code>, if we change to <code>assertTrue(false)</code> to fail the test, <code>method2</code> and <code>method3</code> will not be run, but marked as skip (instead of fail as in JUnit 4), as shown in the following outputs:</p>

<pre class="output">
@Test: method1
FAILED: method1
java.lang.AssertionError: expected [true] but found [false]
SKIPPED: method2
SKIPPED: method3

===============================================
    Default test
    Tests run: 3, Failures: 1, Skips: 2
===============================================</pre>

<h4>TestNG - Group Test and Dependency</h4>

<p>Each test method can be assigned to one or more groups. We can select one or more groups to test via XML description file. For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19</pre>
</td>
<td>
<pre>
import org.testng.annotations.*;
 
public class TestNGGroupTest {
   @Test(groups = {&quot;init&quot;})
   public void method1() {
      System.out.println(&quot;@Test: method1&quot;);
   }
 
   @Test(groups = {&quot;init&quot;, &quot;post-init&quot;})
   public void method2() {
      System.out.println(&quot;@Test: method2&quot;);
   }
 
   @Test(groups = {&quot;main&quot;})
   public void method3() {
      System.out.println(&quot;@Test: method3&quot;);
   }
}
 </pre>
</td>
</tr>
</tbody>
</table>

<p>The XML description file to run methods in group &quot;init&quot; only.</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14</pre>
</td>
<td>
<pre>
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!DOCTYPE suite SYSTEM &quot;http://testng.org/testng-1.0.dtd&quot; &gt;
&lt;suite name=&quot;MyNumberTestSuite&quot;&gt;
  &lt;test name=&quot;MyNumberTest&quot;&gt;
    &lt;groups&gt;
     &lt;run&gt;
      &lt;include name=&quot;init&quot; /&gt;
     &lt;/run&gt;
   &lt;/groups&gt;
    &lt;classes&gt;
       &lt;class name=&quot;TestNGGroupTest&quot;/&gt;
    &lt;/classes&gt;
  &lt;/test&gt;
&lt;/suite&gt;</pre>
</td>
</tr>
</tbody>
</table>

<h5>Dependency on Groups</h5>

<p>Instead of specifying dependency on individual method names as in the previous section, we can place related method (e.g., init methods) in groups, and specifying dependency on groups of methods. For example,</p>

<table class="table-program">
<col class="col-line-number" />
<col class="col-program" />
<tbody>
<tr>
<td>
<pre class="text-right">
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20</pre>
</td>
<td>
<pre>
import static org.testng.Assert.*;
import org.testng.annotations.*;
 
public class TestNGGroupDependsTest {
   @Test(groups = {&quot;init&quot;})
   public void method1() {
      System.out.println(&quot;@Test: method1&quot;);
      assertTrue(true); <span class="color-comment"> // try true and false</span>
   }
 
   @Test(groups = {&quot;init&quot;, &quot;post-init&quot;})
   public void method2() {
      System.out.println(&quot;@Test: method2&quot;);
   }
 
   @Test(groups = {&quot;main&quot;}, dependsOnGroups={&quot;init&quot;})
   public void method3() {
      System.out.println(&quot;@Test: method3&quot;);
   }
}</pre>
</td>
</tr>
</tbody>
</table>

<p>If we use <code>assertTrue(true)</code> in <code>method1</code>, <code>method3</code> will be run. However, if we use <code>assertTrue(false)</code> in <code>method1</code>, <code>method3</code> will be skipped.</p>

<!-- @@ start change in v1 -->
<p class="references">REFERENCES &amp; RESOURCES</p>
<ul>
<li>JUnit mother site @ <a href="http://junit.org/">http://junit.org</a>.</li>
<li>TestNG mother site @ <a href="http://testng.org/">http://testng.org</a>.</li>
<li>JUnit API documentation @ <a href="http://junit.sourceforge.net/javadoc_40/">http://junit.sourceforge.net/javadoc_40</a>.</li>
<li>Kent Beck and Erich Gamma, &quot;JUnit Cookbook&quot; @ <a href="http://junit.sourceforge.net/doc/cookbook/cookbook.htm">http://junit.sourceforge.net/doc/cookbook/cookbook.htm</a>.</li>
<li>JUnit A Cook's Tour (for JUnit 3.8) @ <a href="http://junit.sourceforge.net/doc/cookstour/cookstour.htm">http://junit.sourceforge.net/doc/cookstour/cookstour.htm</a>.</li>
</ul>

</div> <!-- End the content-main division -->

<div id="content-footer">
<p>Latest version tested: JDK 1.7, JUnit 4.11, TestNG 6.8<br />
Last modified: October, 2013</p>
</div>

</div>  <!-- End the wrap-inner division -->

<!-- footer filled by JavaScript -->
<div id="footer" class="header-footer"><p>&nbsp;</p></div>

</div>  <!-- End the wrap-outer division -->
<!-- @@ end change in v1 -->


</body>
</html>
