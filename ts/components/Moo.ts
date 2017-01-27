class Moo
{
	protected foo: Foo;
	protected bar: Bar;

	public constructor()
	{
		this.foo = new Foo();
		this.bar = new Bar();
	}

	public moochosChaos(): void
	{
		this.bar.barTender();
		this.foo.fooThis();
		console.log('Your horse is amazing indeed, Sir.');
	}
}
