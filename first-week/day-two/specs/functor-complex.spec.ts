/**
 * LUXCIUM LICENSE *NO* PERMISSION GRANTED - PROVIDED "AS IS" - WITHOUT WARRANTY
 * =============================================================================≈
 * @author Benjamin Vincent Kasapoglu (LUXCIUM)
 * @copyright © 2020 - LUXCIUM (Benjamin Vincent Kasapoglu) <luxcium@neb401.com>
 * @license LUXCIUM-LICENSE for this file only or other having the same mention
 * =============================================================================≈
 * Scientia es lux principium✨ ™ - SEE THE BOTTOM OF THIS FILES FOR MORE INFO
 */

import { expect } from 'chai';
import { FunctorComplex } from '../functor-complex';
import { FunctorSimplex } from '../functor-simplex';
import { fantasyLandMapFunctor } from './fantasy-land-functor.test';
const stringFunctor = new FunctorComplex('StringValue');
// const u = stringFunctor;
/**
 *  FunctorComplex must be compatible with FunctorSimplex
 */
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorSimplex);

/**
 * It can map from type A to type A
 */
stringFunctor.map(a => expect(a).to.be.a('string'));

/**
 * It can map from type A to type B
 */
stringFunctor.map<number>(a => a.length).map(b => expect(b).to.be.a('number'));

/**
 * It can map from type A to type A
 * and FunctorComplex is an instanceOf FunctorComplex
 */
expect(stringFunctor.map<string>(a => a)).to.be.instanceOf(FunctorComplex);

expect(stringFunctor.map<string>(a => a).fork).to.be.equal('StringValue');
expect(stringFunctor.map<string>(a => a).toString()).to.be.equal(
  '"StringValue"',
);

expect(stringFunctor.map<string>(a => a).toValue()).to.be.equal('StringValue');

const numericFunctor = new FunctorComplex(24);

expect(numericFunctor.map<number>(a => a).toString()).to.be.equal('24');

expect(numericFunctor.map<number>(a => a).toValue()).to.be.eql(24);

const objectFunctor = new FunctorComplex({
  numeric: 24,
  stringValue: 'StringValue',
});

expect(objectFunctor.map(a => a).toString()).to.be.equal(
  '{"numeric":24,"stringValue":"StringValue"}',
);

expect(objectFunctor.map(a => a).toValue()).to.be.eql({
  numeric: 24,
  stringValue: 'StringValue',
});
// const numericFunctor = new FunctorComplex(24);
fantasyLandMapFunctor(FunctorComplex);

function testFunctorComplex() {
  try {
    const myFunctorTwo = new FunctorComplex('1516');
    myFunctorTwo.map((a: string) => a);
    const aFunctorSmplx: FunctorSimplex<number> = myFunctorTwo.map(
      (a: string): number => a.length,
    );
    void myFunctorTwo.fork;
    void aFunctorSmplx;
    void myFunctorTwo.toString();
    void myFunctorTwo.toValue();
    return true;
  } catch (error) {
    return false;
  }
}
testFunctorComplex();
// return  && testFunctorSimplex();

/*
================================================================================≈
† LUXCIUM‡ LICENSE — *NO* PERMISSION GRANTED — PROVIDED "AS IS" WITHOUT WARRANTY

‽  *NO* PERMISSION ARE GRANTED. NOT TO PUBLISH, NOT TO DISTRIBUTE, NOT TO
‽  SUBLICENSE, AND/OR NOT TO SELL COPIES OF THE SOFTWARE.
‽
‽  You may use, only for yourself, the source code in this file and from
‽  imported files to this one. You have the right to: distribute to your
‽  friends, to your students, or to you coworker for personal or academic use
‽  at home at school or at work. You must include this «FULL NOTICE» in each
‽  imported files to this one that you decide to use if such «FULL NOTICE»
‽  is missing. If you modify the code in a substatial way you may decide to
‽  include only the «COPYRIGHT» and the «SHORT NOTICE» below.

† Copyright © 2020 — LUXCIUM‡ (Benjamin Vincent Kasapoglu) <luxcium⸓neb401.com>

- --> SHORT NOTICE
-  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ALL KIND, EXPRESS OR
-  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ALL CLAIM, DAMAGES OR OTHER
-  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-  SOFTWARE.
- -->
-
- IN ANY CASES THE COPYRIGHT AND SHORT NOTICE ABOVE MUST BE INCLUDED.

† Scientia es lux principium✨ ™
================================================================================≈
*/
